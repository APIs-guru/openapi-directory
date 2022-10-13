import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.meraki.com/api/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def add_network_switch_stack(self, request: operations.AddNetworkSwitchStackRequest) -> operations.AddNetworkSwitchStackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/add", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.add_network_switch_stack_200_application_json_object = out

        return res

    
    
    def assign_organization_licenses_seats(self, request: operations.AssignOrganizationLicensesSeatsRequest) -> operations.AssignOrganizationLicensesSeatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/assignSeats", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.assign_organization_licenses_seats_200_application_json_object = out

        return res

    
    
    def bind_network(self, request: operations.BindNetworkRequest) -> operations.BindNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/bind", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BindNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bind_network_200_application_json_object = out

        return res

    
    
    def blink_device_leds(self, request: operations.BlinkDeviceLedsRequest) -> operations.BlinkDeviceLedsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/blinkLeds", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BlinkDeviceLedsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.blink_device_leds_202_application_json_object = out

        return res

    
    
    def checkin_network_sm_devices(self, request: operations.CheckinNetworkSmDevicesRequest) -> operations.CheckinNetworkSmDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/checkin", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckinNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.checkin_network_sm_devices_200_application_json_object = out

        return res

    
    
    def claim_into_organization(self, request: operations.ClaimIntoOrganizationRequest) -> operations.ClaimIntoOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/claim", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimIntoOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.claim_into_organization_200_application_json_object = out

        return res

    
    
    def claim_network_devices(self, request: operations.ClaimNetworkDevicesRequest) -> operations.ClaimNetworkDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/claim", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def clone_organization(self, request: operations.CloneOrganizationRequest) -> operations.CloneOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/clone", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_201_application_json_object = out

        return res

    
    
    def clone_organization_switch_devices(self, request: operations.CloneOrganizationSwitchDevicesRequest) -> operations.CloneOrganizationSwitchDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/switch/devices/clone", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationSwitchDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_switch_devices_200_application_json_object = out

        return res

    
    
    def combine_organization_networks(self, request: operations.CombineOrganizationNetworksRequest) -> operations.CombineOrganizationNetworksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks/combine", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CombineOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.combine_organization_networks_200_application_json_object = out

        return res

    
    
    def create_device_switch_routing_interface(self, request: operations.CreateDeviceSwitchRoutingInterfaceRequest) -> operations.CreateDeviceSwitchRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_interface_201_application_json_object = out

        return res

    
    
    def create_device_switch_routing_static_route(self, request: operations.CreateDeviceSwitchRoutingStaticRouteRequest) -> operations.CreateDeviceSwitchRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_static_route_201_application_json_object = out

        return res

    
    
    def create_network_appliance_static_route(self, request: operations.CreateNetworkApplianceStaticRouteRequest) -> operations.CreateNetworkApplianceStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_static_route_201_application_json_object = out

        return res

    
    
    def create_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object = out

        return res

    
    
    def create_network_appliance_vlan(self, request: operations.CreateNetworkApplianceVlanRequest) -> operations.CreateNetworkApplianceVlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_vlan_201_application_json_object = out

        return res

    
    
    def create_network_camera_quality_retention_profile(self, request: operations.CreateNetworkCameraQualityRetentionProfileRequest) -> operations.CreateNetworkCameraQualityRetentionProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    
    def create_network_camera_wireless_profile(self, request: operations.CreateNetworkCameraWirelessProfileRequest) -> operations.CreateNetworkCameraWirelessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    
    def create_network_firmware_upgrades_rollback(self, request: operations.CreateNetworkFirmwareUpgradesRollbackRequest) -> operations.CreateNetworkFirmwareUpgradesRollbackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades/rollbacks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFirmwareUpgradesRollbackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_firmware_upgrades_rollback_200_application_json_object = out

        return res

    
    
    def create_network_floor_plan(self, request: operations.CreateNetworkFloorPlanRequest) -> operations.CreateNetworkFloorPlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_floor_plan_201_application_json_object = out

        return res

    
    
    def create_network_group_policy(self, request: operations.CreateNetworkGroupPolicyRequest) -> operations.CreateNetworkGroupPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_group_policy_201_application_json_object = out

        return res

    
    
    def create_network_meraki_auth_user(self, request: operations.CreateNetworkMerakiAuthUserRequest) -> operations.CreateNetworkMerakiAuthUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_meraki_auth_user_201_application_json_object = out

        return res

    
    
    def create_network_mqtt_broker(self, request: operations.CreateNetworkMqttBrokerRequest) -> operations.CreateNetworkMqttBrokerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_mqtt_broker_201_application_json_object = out

        return res

    
    
    def create_network_pii_request(self, request: operations.CreateNetworkPiiRequestRequest) -> operations.CreateNetworkPiiRequestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_pii_request_201_application_json_object = out

        return res

    
    
    def create_network_sm_bypass_activation_lock_attempt(self, request: operations.CreateNetworkSmBypassActivationLockAttemptRequest) -> operations.CreateNetworkSmBypassActivationLockAttemptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_bypass_activation_lock_attempt_201_application_json_object = out

        return res

    
    
    def create_network_sm_target_group(self, request: operations.CreateNetworkSmTargetGroupRequest) -> operations.CreateNetworkSmTargetGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_target_group_201_application_json_object = out

        return res

    
    
    def create_network_switch_access_policy(self, request: operations.CreateNetworkSwitchAccessPolicyRequest) -> operations.CreateNetworkSwitchAccessPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_access_policy_201_application_json_object = out

        return res

    
    
    def create_network_switch_link_aggregation(self, request: operations.CreateNetworkSwitchLinkAggregationRequest) -> operations.CreateNetworkSwitchLinkAggregationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_link_aggregation_201_application_json_object = out

        return res

    
    
    def create_network_switch_port_schedule(self, request: operations.CreateNetworkSwitchPortScheduleRequest) -> operations.CreateNetworkSwitchPortScheduleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_port_schedule_201_application_json_object = out

        return res

    
    
    def create_network_switch_qos_rule(self, request: operations.CreateNetworkSwitchQosRuleRequest) -> operations.CreateNetworkSwitchQosRuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_qos_rule_201_application_json_object = out

        return res

    
    
    def create_network_switch_routing_multicast_rendezvous_point(self, request: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_routing_multicast_rendezvous_point_201_application_json_object = out

        return res

    
    
    def create_network_switch_stack(self, request: operations.CreateNetworkSwitchStackRequest) -> operations.CreateNetworkSwitchStackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_201_application_json_object = out

        return res

    
    
    def create_network_switch_stack_routing_interface(self, request: operations.CreateNetworkSwitchStackRoutingInterfaceRequest) -> operations.CreateNetworkSwitchStackRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_interface_201_application_json_object = out

        return res

    
    
    def create_network_switch_stack_routing_static_route(self, request: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.CreateNetworkSwitchStackRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_static_route_201_application_json_object = out

        return res

    
    
    def create_network_webhooks_http_server(self, request: operations.CreateNetworkWebhooksHTTPServerRequest) -> operations.CreateNetworkWebhooksHTTPServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_http_server_201_application_json_object = out

        return res

    
    
    def create_network_webhooks_webhook_test(self, request: operations.CreateNetworkWebhooksWebhookTestRequest) -> operations.CreateNetworkWebhooksWebhookTestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_webhook_test_201_application_json_object = out

        return res

    
    
    def create_network_wireless_rf_profile(self, request: operations.CreateNetworkWirelessRfProfileRequest) -> operations.CreateNetworkWirelessRfProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_rf_profile_201_application_json_object = out

        return res

    
    
    def create_network_wireless_ssid_identity_psk(self, request: operations.CreateNetworkWirelessSsidIdentityPskRequest) -> operations.CreateNetworkWirelessSsidIdentityPskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_ssid_identity_psk_201_application_json_object = out

        return res

    
    
    def create_organization(self, request: operations.CreateOrganizationRequest) -> operations.CreateOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/organizations"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_201_application_json_object = out

        return res

    
    
    def create_organization_action_batch(self, request: operations.CreateOrganizationActionBatchRequest) -> operations.CreateOrganizationActionBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_action_batch_201_application_json_object = out

        return res

    
    
    def create_organization_adaptive_policy_acl(self, request: operations.CreateOrganizationAdaptivePolicyACLRequest) -> operations.CreateOrganizationAdaptivePolicyACLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    
    def create_organization_admin(self, request: operations.CreateOrganizationAdminRequest) -> operations.CreateOrganizationAdminResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_admin_201_application_json_object = out

        return res

    
    
    def create_organization_branding_policy(self, request: operations.CreateOrganizationBrandingPolicyRequest) -> operations.CreateOrganizationBrandingPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_branding_policy_201_application_json_object = out

        return res

    
    
    def create_organization_config_template(self, request: operations.CreateOrganizationConfigTemplateRequest) -> operations.CreateOrganizationConfigTemplateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_config_template_201_application_json_object = out

        return res

    
    
    def create_organization_insight_monitored_media_server(self, request: operations.CreateOrganizationInsightMonitoredMediaServerRequest) -> operations.CreateOrganizationInsightMonitoredMediaServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_insight_monitored_media_server_201_application_json_object = out

        return res

    
    
    def create_organization_network(self, request: operations.CreateOrganizationNetworkRequest) -> operations.CreateOrganizationNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_network_201_application_json_object = out

        return res

    
    
    def create_organization_saml_idp(self, request: operations.CreateOrganizationSamlIdpRequest) -> operations.CreateOrganizationSamlIdpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_idp_201_application_json_object = out

        return res

    
    
    def create_organization_saml_role(self, request: operations.CreateOrganizationSamlRoleRequest) -> operations.CreateOrganizationSamlRoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_role_201_application_json_object = out

        return res

    
    
    def cycle_device_switch_ports(self, request: operations.CycleDeviceSwitchPortsRequest) -> operations.CycleDeviceSwitchPortsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/cycle", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CycleDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cycle_device_switch_ports_200_application_json_object = out

        return res

    
    
    def delete_device_switch_routing_interface(self, request: operations.DeleteDeviceSwitchRoutingInterfaceRequest) -> operations.DeleteDeviceSwitchRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_device_switch_routing_static_route(self, request: operations.DeleteDeviceSwitchRoutingStaticRouteRequest) -> operations.DeleteDeviceSwitchRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network(self, request: operations.DeleteNetworkRequest) -> operations.DeleteNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_appliance_static_route(self, request: operations.DeleteNetworkApplianceStaticRouteRequest) -> operations.DeleteNetworkApplianceStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_appliance_vlan(self, request: operations.DeleteNetworkApplianceVlanRequest) -> operations.DeleteNetworkApplianceVlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_camera_quality_retention_profile(self, request: operations.DeleteNetworkCameraQualityRetentionProfileRequest) -> operations.DeleteNetworkCameraQualityRetentionProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_camera_wireless_profile(self, request: operations.DeleteNetworkCameraWirelessProfileRequest) -> operations.DeleteNetworkCameraWirelessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_floor_plan(self, request: operations.DeleteNetworkFloorPlanRequest) -> operations.DeleteNetworkFloorPlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_group_policy(self, request: operations.DeleteNetworkGroupPolicyRequest) -> operations.DeleteNetworkGroupPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_meraki_auth_user(self, request: operations.DeleteNetworkMerakiAuthUserRequest) -> operations.DeleteNetworkMerakiAuthUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_mqtt_broker(self, request: operations.DeleteNetworkMqttBrokerRequest) -> operations.DeleteNetworkMqttBrokerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_pii_request(self, request: operations.DeleteNetworkPiiRequestRequest) -> operations.DeleteNetworkPiiRequestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_sm_target_group(self, request: operations.DeleteNetworkSmTargetGroupRequest) -> operations.DeleteNetworkSmTargetGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_sm_user_access_device(self, request: operations.DeleteNetworkSmUserAccessDeviceRequest) -> operations.DeleteNetworkSmUserAccessDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmUserAccessDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_access_policy(self, request: operations.DeleteNetworkSwitchAccessPolicyRequest) -> operations.DeleteNetworkSwitchAccessPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_link_aggregation(self, request: operations.DeleteNetworkSwitchLinkAggregationRequest) -> operations.DeleteNetworkSwitchLinkAggregationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_port_schedule(self, request: operations.DeleteNetworkSwitchPortScheduleRequest) -> operations.DeleteNetworkSwitchPortScheduleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_qos_rule(self, request: operations.DeleteNetworkSwitchQosRuleRequest) -> operations.DeleteNetworkSwitchQosRuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_routing_multicast_rendezvous_point(self, request: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_stack(self, request: operations.DeleteNetworkSwitchStackRequest) -> operations.DeleteNetworkSwitchStackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_stack_routing_interface(self, request: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest) -> operations.DeleteNetworkSwitchStackRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_switch_stack_routing_static_route(self, request: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) -> operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_webhooks_http_server(self, request: operations.DeleteNetworkWebhooksHTTPServerRequest) -> operations.DeleteNetworkWebhooksHTTPServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_wireless_rf_profile(self, request: operations.DeleteNetworkWirelessRfProfileRequest) -> operations.DeleteNetworkWirelessRfProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_network_wireless_ssid_identity_psk(self, request: operations.DeleteNetworkWirelessSsidIdentityPskRequest) -> operations.DeleteNetworkWirelessSsidIdentityPskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization(self, request: operations.DeleteOrganizationRequest) -> operations.DeleteOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_action_batch(self, request: operations.DeleteOrganizationActionBatchRequest) -> operations.DeleteOrganizationActionBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_adaptive_policy_acl(self, request: operations.DeleteOrganizationAdaptivePolicyACLRequest) -> operations.DeleteOrganizationAdaptivePolicyACLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_admin(self, request: operations.DeleteOrganizationAdminRequest) -> operations.DeleteOrganizationAdminResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_branding_policy(self, request: operations.DeleteOrganizationBrandingPolicyRequest) -> operations.DeleteOrganizationBrandingPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_config_template(self, request: operations.DeleteOrganizationConfigTemplateRequest) -> operations.DeleteOrganizationConfigTemplateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_insight_monitored_media_server(self, request: operations.DeleteOrganizationInsightMonitoredMediaServerRequest) -> operations.DeleteOrganizationInsightMonitoredMediaServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_saml_idp(self, request: operations.DeleteOrganizationSamlIdpRequest) -> operations.DeleteOrganizationSamlIdpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_organization_saml_role(self, request: operations.DeleteOrganizationSamlRoleRequest) -> operations.DeleteOrganizationSamlRoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def generate_device_camera_snapshot(self, request: operations.GenerateDeviceCameraSnapshotRequest) -> operations.GenerateDeviceCameraSnapshotResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/generateSnapshot", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateDeviceCameraSnapshotResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.generate_device_camera_snapshot_202_application_json_object = out

        return res

    
    
    def get_device(self, request: operations.GetDeviceRequest) -> operations.GetDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_200_application_json_object = out

        return res

    
    
    def get_device_appliance_dhcp_subnets(self, request: operations.GetDeviceApplianceDhcpSubnetsRequest) -> operations.GetDeviceApplianceDhcpSubnetsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/dhcp/subnets", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceApplianceDhcpSubnetsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_dhcp_subnets_200_application_json_object = out

        return res

    
    
    def get_device_appliance_performance(self, request: operations.GetDeviceAppliancePerformanceRequest) -> operations.GetDeviceAppliancePerformanceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/performance", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAppliancePerformanceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_performance_200_application_json_object = out

        return res

    
    
    def get_device_camera_analytics_live(self, request: operations.GetDeviceCameraAnalyticsLiveRequest) -> operations.GetDeviceCameraAnalyticsLiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/live", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsLiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_live_200_application_json_object = out

        return res

    
    
    def get_device_camera_analytics_overview(self, request: operations.GetDeviceCameraAnalyticsOverviewRequest) -> operations.GetDeviceCameraAnalyticsOverviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsOverviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_overview_200_application_json_object = out

        return res

    
    
    def get_device_camera_analytics_recent(self, request: operations.GetDeviceCameraAnalyticsRecentRequest) -> operations.GetDeviceCameraAnalyticsRecentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/recent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsRecentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_recent_200_application_json_object = out

        return res

    
    
    def get_device_camera_analytics_zone_history(self, request: operations.GetDeviceCameraAnalyticsZoneHistoryRequest) -> operations.GetDeviceCameraAnalyticsZoneHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones/{zoneId}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZoneHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zone_history_200_application_json_object = out

        return res

    
    
    def get_device_camera_analytics_zones(self, request: operations.GetDeviceCameraAnalyticsZonesRequest) -> operations.GetDeviceCameraAnalyticsZonesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZonesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zones_200_application_json_object = out

        return res

    
    
    def get_device_camera_quality_and_retention(self, request: operations.GetDeviceCameraQualityAndRetentionRequest) -> operations.GetDeviceCameraQualityAndRetentionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    
    def get_device_camera_sense(self, request: operations.GetDeviceCameraSenseRequest) -> operations.GetDeviceCameraSenseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_200_application_json_object = out

        return res

    
    
    def get_device_camera_sense_object_detection_models(self, request: operations.GetDeviceCameraSenseObjectDetectionModelsRequest) -> operations.GetDeviceCameraSenseObjectDetectionModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense/objectDetectionModels", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseObjectDetectionModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_object_detection_models_200_application_json_object = out

        return res

    
    
    def get_device_camera_video_link(self, request: operations.GetDeviceCameraVideoLinkRequest) -> operations.GetDeviceCameraVideoLinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/videoLink", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoLinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_link_200_application_json_object = out

        return res

    
    
    def get_device_camera_video_settings(self, request: operations.GetDeviceCameraVideoSettingsRequest) -> operations.GetDeviceCameraVideoSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_settings_200_application_json_object = out

        return res

    
    
    def get_device_camera_wireless_profiles(self, request: operations.GetDeviceCameraWirelessProfilesRequest) -> operations.GetDeviceCameraWirelessProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    
    def get_device_cellular_gateway_lan(self, request: operations.GetDeviceCellularGatewayLanRequest) -> operations.GetDeviceCellularGatewayLanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    
    def get_device_cellular_gateway_port_forwarding_rules(self, request: operations.GetDeviceCellularGatewayPortForwardingRulesRequest) -> operations.GetDeviceCellularGatewayPortForwardingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

        return res

    
    
    def get_device_clients(self, request: operations.GetDeviceClientsRequest) -> operations.GetDeviceClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_clients_200_application_json_object = out

        return res

    
    
    def get_device_lldp_cdp(self, request: operations.GetDeviceLldpCdpRequest) -> operations.GetDeviceLldpCdpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/lldpCdp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceLldpCdpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_lldp_cdp_200_application_json_object = out

        return res

    
    
    def get_device_loss_and_latency_history(self, request: operations.GetDeviceLossAndLatencyHistoryRequest) -> operations.GetDeviceLossAndLatencyHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/lossAndLatencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceLossAndLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_loss_and_latency_history_200_application_json_object = out

        return res

    
    
    def get_device_management_interface(self, request: operations.GetDeviceManagementInterfaceRequest) -> operations.GetDeviceManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_management_interface_200_application_json_object = out

        return res

    
    
    def get_device_switch_port(self, request: operations.GetDeviceSwitchPortRequest) -> operations.GetDeviceSwitchPortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_port_200_application_json_object = out

        return res

    
    
    def get_device_switch_ports(self, request: operations.GetDeviceSwitchPortsRequest) -> operations.GetDeviceSwitchPortsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_200_application_json_object = out

        return res

    
    
    def get_device_switch_ports_statuses(self, request: operations.GetDeviceSwitchPortsStatusesRequest) -> operations.GetDeviceSwitchPortsStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_200_application_json_object = out

        return res

    
    
    def get_device_switch_ports_statuses_packets(self, request: operations.GetDeviceSwitchPortsStatusesPacketsRequest) -> operations.GetDeviceSwitchPortsStatusesPacketsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses/packets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesPacketsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_packets_200_application_json_object = out

        return res

    
    
    def get_device_switch_routing_interface(self, request: operations.GetDeviceSwitchRoutingInterfaceRequest) -> operations.GetDeviceSwitchRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_200_application_json_object = out

        return res

    
    
    def get_device_switch_routing_interface_dhcp(self, request: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.GetDeviceSwitchRoutingInterfaceDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    
    def get_device_switch_routing_interfaces(self, request: operations.GetDeviceSwitchRoutingInterfacesRequest) -> operations.GetDeviceSwitchRoutingInterfacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interfaces_200_application_json_object = out

        return res

    
    
    def get_device_switch_routing_static_route(self, request: operations.GetDeviceSwitchRoutingStaticRouteRequest) -> operations.GetDeviceSwitchRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    
    def get_device_switch_routing_static_routes(self, request: operations.GetDeviceSwitchRoutingStaticRoutesRequest) -> operations.GetDeviceSwitchRoutingStaticRoutesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_routes_200_application_json_object = out

        return res

    
    
    def get_device_switch_warm_spare(self, request: operations.GetDeviceSwitchWarmSpareRequest) -> operations.GetDeviceSwitchWarmSpareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_warm_spare_200_application_json_object = out

        return res

    
    
    def get_device_wireless_bluetooth_settings(self, request: operations.GetDeviceWirelessBluetoothSettingsRequest) -> operations.GetDeviceWirelessBluetoothSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    
    def get_device_wireless_connection_stats(self, request: operations.GetDeviceWirelessConnectionStatsRequest) -> operations.GetDeviceWirelessConnectionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_connection_stats_200_application_json_object = out

        return res

    
    
    def get_device_wireless_latency_stats(self, request: operations.GetDeviceWirelessLatencyStatsRequest) -> operations.GetDeviceWirelessLatencyStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_latency_stats_200_application_json_object = out

        return res

    
    
    def get_device_wireless_radio_settings(self, request: operations.GetDeviceWirelessRadioSettingsRequest) -> operations.GetDeviceWirelessRadioSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    
    def get_device_wireless_status(self, request: operations.GetDeviceWirelessStatusRequest) -> operations.GetDeviceWirelessStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/status", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_status_200_application_json_object = out

        return res

    
    
    def get_network(self, request: operations.GetNetworkRequest) -> operations.GetNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_200_application_json_object = out

        return res

    
    
    def get_network_alerts_settings(self, request: operations.GetNetworkAlertsSettingsRequest) -> operations.GetNetworkAlertsSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_alerts_settings_200_application_json_object = out

        return res

    
    
    def get_network_appliance_client_security_events(self, request: operations.GetNetworkApplianceClientSecurityEventsRequest) -> operations.GetNetworkApplianceClientSecurityEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/clients/{clientId}/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceClientSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_client_security_events_200_application_json_object = out

        return res

    
    
    def get_network_appliance_connectivity_monitoring_destinations(self, request: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    
    def get_network_appliance_content_filtering(self, request: operations.GetNetworkApplianceContentFilteringRequest) -> operations.GetNetworkApplianceContentFilteringResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    
    def get_network_appliance_content_filtering_categories(self, request: operations.GetNetworkApplianceContentFilteringCategoriesRequest) -> operations.GetNetworkApplianceContentFilteringCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering/categories", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_categories_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_cellular_firewall_rules(self, request: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_firewalled_service(self, request: operations.GetNetworkApplianceFirewallFirewalledServiceRequest) -> operations.GetNetworkApplianceFirewallFirewalledServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_firewalled_services(self, request: operations.GetNetworkApplianceFirewallFirewalledServicesRequest) -> operations.GetNetworkApplianceFirewallFirewalledServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_services_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_inbound_firewall_rules(self, request: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_l3_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL3FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_l7_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_l7_firewall_rules_application_categories(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_firewall_port_forwarding_rules(self, request: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.GetNetworkApplianceFirewallPortForwardingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_port(self, request: operations.GetNetworkAppliancePortRequest) -> operations.GetNetworkAppliancePortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_port_200_application_json_object = out

        return res

    
    
    def get_network_appliance_ports(self, request: operations.GetNetworkAppliancePortsRequest) -> operations.GetNetworkAppliancePortsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_ports_200_application_json_object = out

        return res

    
    
    def get_network_appliance_security_events(self, request: operations.GetNetworkApplianceSecurityEventsRequest) -> operations.GetNetworkApplianceSecurityEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_events_200_application_json_object = out

        return res

    
    
    def get_network_appliance_security_intrusion(self, request: operations.GetNetworkApplianceSecurityIntrusionRequest) -> operations.GetNetworkApplianceSecurityIntrusionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    
    def get_network_appliance_security_malware(self, request: operations.GetNetworkApplianceSecurityMalwareRequest) -> operations.GetNetworkApplianceSecurityMalwareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_malware_200_application_json_object = out

        return res

    
    
    def get_network_appliance_settings(self, request: operations.GetNetworkApplianceSettingsRequest) -> operations.GetNetworkApplianceSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_settings_200_application_json_object = out

        return res

    
    
    def get_network_appliance_single_lan(self, request: operations.GetNetworkApplianceSingleLanRequest) -> operations.GetNetworkApplianceSingleLanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_single_lan_200_application_json_object = out

        return res

    
    
    def get_network_appliance_static_route(self, request: operations.GetNetworkApplianceStaticRouteRequest) -> operations.GetNetworkApplianceStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_route_200_application_json_object = out

        return res

    
    
    def get_network_appliance_static_routes(self, request: operations.GetNetworkApplianceStaticRoutesRequest) -> operations.GetNetworkApplianceStaticRoutesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_routes_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping(self, request: operations.GetNetworkApplianceTrafficShapingRequest) -> operations.GetNetworkApplianceTrafficShapingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping_custom_performance_classes(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping_rules(self, request: operations.GetNetworkApplianceTrafficShapingRulesRequest) -> operations.GetNetworkApplianceTrafficShapingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    
    def get_network_appliance_traffic_shaping_uplink_selection(self, request: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    
    def get_network_appliance_uplinks_usage_history(self, request: operations.GetNetworkApplianceUplinksUsageHistoryRequest) -> operations.GetNetworkApplianceUplinksUsageHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/uplinks/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceUplinksUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_uplinks_usage_history_200_application_json_object = out

        return res

    
    
    def get_network_appliance_vlan(self, request: operations.GetNetworkApplianceVlanRequest) -> operations.GetNetworkApplianceVlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlan_200_application_json_object = out

        return res

    
    
    def get_network_appliance_vlans(self, request: operations.GetNetworkApplianceVlansRequest) -> operations.GetNetworkApplianceVlansResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_200_application_json_object = out

        return res

    
    
    def get_network_appliance_vlans_settings(self, request: operations.GetNetworkApplianceVlansSettingsRequest) -> operations.GetNetworkApplianceVlansSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    
    def get_network_appliance_vpn_bgp(self, request: operations.GetNetworkApplianceVpnBgpRequest) -> operations.GetNetworkApplianceVpnBgpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    
    def get_network_appliance_vpn_site_to_site_vpn(self, request: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.GetNetworkApplianceVpnSiteToSiteVpnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    
    def get_network_appliance_warm_spare(self, request: operations.GetNetworkApplianceWarmSpareRequest) -> operations.GetNetworkApplianceWarmSpareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    
    def get_network_bluetooth_client(self, request: operations.GetNetworkBluetoothClientRequest) -> operations.GetNetworkBluetoothClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients/{bluetoothClientId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_client_200_application_json_object = out

        return res

    
    
    def get_network_bluetooth_clients(self, request: operations.GetNetworkBluetoothClientsRequest) -> operations.GetNetworkBluetoothClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_clients_200_application_json_object = out

        return res

    
    
    def get_network_camera_quality_retention_profile(self, request: operations.GetNetworkCameraQualityRetentionProfileRequest) -> operations.GetNetworkCameraQualityRetentionProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    
    def get_network_camera_quality_retention_profiles(self, request: operations.GetNetworkCameraQualityRetentionProfilesRequest) -> operations.GetNetworkCameraQualityRetentionProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profiles_200_application_json_object = out

        return res

    
    
    def get_network_camera_schedules(self, request: operations.GetNetworkCameraSchedulesRequest) -> operations.GetNetworkCameraSchedulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/schedules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraSchedulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_schedules_200_application_json_object = out

        return res

    
    
    def get_network_camera_wireless_profile(self, request: operations.GetNetworkCameraWirelessProfileRequest) -> operations.GetNetworkCameraWirelessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    
    def get_network_camera_wireless_profiles(self, request: operations.GetNetworkCameraWirelessProfilesRequest) -> operations.GetNetworkCameraWirelessProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profiles_200_application_json_object = out

        return res

    
    
    def get_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    
    def get_network_cellular_gateway_dhcp(self, request: operations.GetNetworkCellularGatewayDhcpRequest) -> operations.GetNetworkCellularGatewayDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    
    def get_network_cellular_gateway_subnet_pool(self, request: operations.GetNetworkCellularGatewaySubnetPoolRequest) -> operations.GetNetworkCellularGatewaySubnetPoolResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    
    def get_network_cellular_gateway_uplink(self, request: operations.GetNetworkCellularGatewayUplinkRequest) -> operations.GetNetworkCellularGatewayUplinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    
    def get_network_client(self, request: operations.GetNetworkClientRequest) -> operations.GetNetworkClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_200_application_json_object = out

        return res

    
    
    def get_network_client_policy(self, request: operations.GetNetworkClientPolicyRequest) -> operations.GetNetworkClientPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_policy_200_application_json_object = out

        return res

    
    
    def get_network_client_splash_authorization_status(self, request: operations.GetNetworkClientSplashAuthorizationStatusRequest) -> operations.GetNetworkClientSplashAuthorizationStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    
    def get_network_client_traffic_history(self, request: operations.GetNetworkClientTrafficHistoryRequest) -> operations.GetNetworkClientTrafficHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/trafficHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientTrafficHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_traffic_history_200_application_json_object = out

        return res

    
    
    def get_network_client_usage_history(self, request: operations.GetNetworkClientUsageHistoryRequest) -> operations.GetNetworkClientUsageHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/usageHistory", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_usage_history_200_application_json_object = out

        return res

    
    
    def get_network_clients(self, request: operations.GetNetworkClientsRequest) -> operations.GetNetworkClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_200_application_json_object = out

        return res

    
    
    def get_network_clients_application_usage(self, request: operations.GetNetworkClientsApplicationUsageRequest) -> operations.GetNetworkClientsApplicationUsageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/applicationUsage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsApplicationUsageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_application_usage_200_application_json_object = out

        return res

    
    
    def get_network_clients_overview(self, request: operations.GetNetworkClientsOverviewRequest) -> operations.GetNetworkClientsOverviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsOverviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_overview_200_application_json_object = out

        return res

    
    
    def get_network_clients_usage_histories(self, request: operations.GetNetworkClientsUsageHistoriesRequest) -> operations.GetNetworkClientsUsageHistoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/usageHistories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsUsageHistoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_usage_histories_200_application_json_object = out

        return res

    
    
    def get_network_devices(self, request: operations.GetNetworkDevicesRequest) -> operations.GetNetworkDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/devices", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_devices_200_application_json_object = out

        return res

    
    
    def get_network_events(self, request: operations.GetNetworkEventsRequest) -> operations.GetNetworkEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_200_application_json_object = out

        return res

    
    
    def get_network_events_event_types(self, request: operations.GetNetworkEventsEventTypesRequest) -> operations.GetNetworkEventsEventTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/events/eventTypes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsEventTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_event_types_200_application_json_object = out

        return res

    
    
    def get_network_firmware_upgrades(self, request: operations.GetNetworkFirmwareUpgradesRequest) -> operations.GetNetworkFirmwareUpgradesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_firmware_upgrades_200_application_json_object = out

        return res

    
    
    def get_network_floor_plan(self, request: operations.GetNetworkFloorPlanRequest) -> operations.GetNetworkFloorPlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plan_200_application_json_object = out

        return res

    
    
    def get_network_floor_plans(self, request: operations.GetNetworkFloorPlansRequest) -> operations.GetNetworkFloorPlansResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlansResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plans_200_application_json_object = out

        return res

    
    
    def get_network_group_policies(self, request: operations.GetNetworkGroupPoliciesRequest) -> operations.GetNetworkGroupPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policies_200_application_json_object = out

        return res

    
    
    def get_network_group_policy(self, request: operations.GetNetworkGroupPolicyRequest) -> operations.GetNetworkGroupPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policy_200_application_json_object = out

        return res

    
    
    def get_network_insight_application_health_by_time(self, request: operations.GetNetworkInsightApplicationHealthByTimeRequest) -> operations.GetNetworkInsightApplicationHealthByTimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/insight/applications/{applicationId}/healthByTime", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkInsightApplicationHealthByTimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_insight_application_health_by_time_200_application_json_object = out

        return res

    
    
    def get_network_meraki_auth_user(self, request: operations.GetNetworkMerakiAuthUserRequest) -> operations.GetNetworkMerakiAuthUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_user_200_application_json_object = out

        return res

    
    
    def get_network_meraki_auth_users(self, request: operations.GetNetworkMerakiAuthUsersRequest) -> operations.GetNetworkMerakiAuthUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_users_200_application_json_object = out

        return res

    
    
    def get_network_mqtt_broker(self, request: operations.GetNetworkMqttBrokerRequest) -> operations.GetNetworkMqttBrokerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_broker_200_application_json_object = out

        return res

    
    
    def get_network_mqtt_brokers(self, request: operations.GetNetworkMqttBrokersRequest) -> operations.GetNetworkMqttBrokersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_brokers_200_application_json_object = out

        return res

    
    
    def get_network_netflow(self, request: operations.GetNetworkNetflowRequest) -> operations.GetNetworkNetflowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_netflow_200_application_json_object = out

        return res

    
    
    def get_network_network_health_channel_utilization(self, request: operations.GetNetworkNetworkHealthChannelUtilizationRequest) -> operations.GetNetworkNetworkHealthChannelUtilizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/networkHealth/channelUtilization", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetworkHealthChannelUtilizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_network_health_channel_utilization_200_application_json_object = out

        return res

    
    
    def get_network_pii_pii_keys(self, request: operations.GetNetworkPiiPiiKeysRequest) -> operations.GetNetworkPiiPiiKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/piiKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiPiiKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_pii_keys_200_application_json_object = out

        return res

    
    
    def get_network_pii_request(self, request: operations.GetNetworkPiiRequestRequest) -> operations.GetNetworkPiiRequestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_request_200_application_json_object = out

        return res

    
    
    def get_network_pii_requests(self, request: operations.GetNetworkPiiRequestsRequest) -> operations.GetNetworkPiiRequestsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_requests_200_application_json_object = out

        return res

    
    
    def get_network_pii_sm_devices_for_key(self, request: operations.GetNetworkPiiSmDevicesForKeyRequest) -> operations.GetNetworkPiiSmDevicesForKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smDevicesForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmDevicesForKeyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_devices_for_key_200_application_json_object = out

        return res

    
    
    def get_network_pii_sm_owners_for_key(self, request: operations.GetNetworkPiiSmOwnersForKeyRequest) -> operations.GetNetworkPiiSmOwnersForKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smOwnersForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmOwnersForKeyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_owners_for_key_200_application_json_object = out

        return res

    
    
    def get_network_settings(self, request: operations.GetNetworkSettingsRequest) -> operations.GetNetworkSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_settings_200_application_json_object = out

        return res

    
    
    def get_network_sm_bypass_activation_lock_attempt(self, request: operations.GetNetworkSmBypassActivationLockAttemptRequest) -> operations.GetNetworkSmBypassActivationLockAttemptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_bypass_activation_lock_attempt_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_cellular_usage_history(self, request: operations.GetNetworkSmDeviceCellularUsageHistoryRequest) -> operations.GetNetworkSmDeviceCellularUsageHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCellularUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_cellular_usage_history_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_certs(self, request: operations.GetNetworkSmDeviceCertsRequest) -> operations.GetNetworkSmDeviceCertsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/certs", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCertsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_certs_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_connectivity(self, request: operations.GetNetworkSmDeviceConnectivityRequest) -> operations.GetNetworkSmDeviceConnectivityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/connectivity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceConnectivityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_connectivity_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_desktop_logs(self, request: operations.GetNetworkSmDeviceDesktopLogsRequest) -> operations.GetNetworkSmDeviceDesktopLogsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/desktopLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDesktopLogsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_desktop_logs_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_device_command_logs(self, request: operations.GetNetworkSmDeviceDeviceCommandLogsRequest) -> operations.GetNetworkSmDeviceDeviceCommandLogsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceCommandLogsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_command_logs_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_device_profiles(self, request: operations.GetNetworkSmDeviceDeviceProfilesRequest) -> operations.GetNetworkSmDeviceDeviceProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_profiles_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_network_adapters(self, request: operations.GetNetworkSmDeviceNetworkAdaptersRequest) -> operations.GetNetworkSmDeviceNetworkAdaptersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/networkAdapters", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceNetworkAdaptersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_network_adapters_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_performance_history(self, request: operations.GetNetworkSmDevicePerformanceHistoryRequest) -> operations.GetNetworkSmDevicePerformanceHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/performanceHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicePerformanceHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_performance_history_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_restrictions(self, request: operations.GetNetworkSmDeviceRestrictionsRequest) -> operations.GetNetworkSmDeviceRestrictionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/restrictions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_restrictions_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_security_centers(self, request: operations.GetNetworkSmDeviceSecurityCentersRequest) -> operations.GetNetworkSmDeviceSecurityCentersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/securityCenters", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSecurityCentersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_security_centers_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_softwares(self, request: operations.GetNetworkSmDeviceSoftwaresRequest) -> operations.GetNetworkSmDeviceSoftwaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/softwares", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_softwares_200_application_json_object = out

        return res

    
    
    def get_network_sm_device_wlan_lists(self, request: operations.GetNetworkSmDeviceWlanListsRequest) -> operations.GetNetworkSmDeviceWlanListsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/wlanLists", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceWlanListsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_wlan_lists_200_application_json_object = out

        return res

    
    
    def get_network_sm_devices(self, request: operations.GetNetworkSmDevicesRequest) -> operations.GetNetworkSmDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_devices_200_application_json_object = out

        return res

    
    
    def get_network_sm_profiles(self, request: operations.GetNetworkSmProfilesRequest) -> operations.GetNetworkSmProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/profiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_profiles_200_application_json_object = out

        return res

    
    
    def get_network_sm_target_group(self, request: operations.GetNetworkSmTargetGroupRequest) -> operations.GetNetworkSmTargetGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_group_200_application_json_object = out

        return res

    
    
    def get_network_sm_target_groups(self, request: operations.GetNetworkSmTargetGroupsRequest) -> operations.GetNetworkSmTargetGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_groups_200_application_json_object = out

        return res

    
    
    def get_network_sm_user_access_devices(self, request: operations.GetNetworkSmUserAccessDevicesRequest) -> operations.GetNetworkSmUserAccessDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserAccessDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_access_devices_200_application_json_object = out

        return res

    
    
    def get_network_sm_user_device_profiles(self, request: operations.GetNetworkSmUserDeviceProfilesRequest) -> operations.GetNetworkSmUserDeviceProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/deviceProfiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_device_profiles_200_application_json_object = out

        return res

    
    
    def get_network_sm_user_softwares(self, request: operations.GetNetworkSmUserSoftwaresRequest) -> operations.GetNetworkSmUserSoftwaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/softwares", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_softwares_200_application_json_object = out

        return res

    
    
    def get_network_sm_users(self, request: operations.GetNetworkSmUsersRequest) -> operations.GetNetworkSmUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_users_200_application_json_object = out

        return res

    
    
    def get_network_snmp(self, request: operations.GetNetworkSnmpRequest) -> operations.GetNetworkSnmpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_snmp_200_application_json_object = out

        return res

    
    
    def get_network_splash_login_attempts(self, request: operations.GetNetworkSplashLoginAttemptsRequest) -> operations.GetNetworkSplashLoginAttemptsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/splashLoginAttempts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSplashLoginAttemptsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_splash_login_attempts_200_application_json_object = out

        return res

    
    
    def get_network_switch_access_control_lists(self, request: operations.GetNetworkSwitchAccessControlListsRequest) -> operations.GetNetworkSwitchAccessControlListsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    
    def get_network_switch_access_policies(self, request: operations.GetNetworkSwitchAccessPoliciesRequest) -> operations.GetNetworkSwitchAccessPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policies_200_application_json_object = out

        return res

    
    
    def get_network_switch_access_policy(self, request: operations.GetNetworkSwitchAccessPolicyRequest) -> operations.GetNetworkSwitchAccessPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policy_200_application_json_object = out

        return res

    
    
    def get_network_switch_alternate_management_interface(self, request: operations.GetNetworkSwitchAlternateManagementInterfaceRequest) -> operations.GetNetworkSwitchAlternateManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    
    def get_network_switch_dhcp_server_policy(self, request: operations.GetNetworkSwitchDhcpServerPolicyRequest) -> operations.GetNetworkSwitchDhcpServerPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    
    def get_network_switch_dscp_to_cos_mappings(self, request: operations.GetNetworkSwitchDscpToCosMappingsRequest) -> operations.GetNetworkSwitchDscpToCosMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    
    def get_network_switch_link_aggregations(self, request: operations.GetNetworkSwitchLinkAggregationsRequest) -> operations.GetNetworkSwitchLinkAggregationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchLinkAggregationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_link_aggregations_200_application_json_object = out

        return res

    
    
    def get_network_switch_mtu(self, request: operations.GetNetworkSwitchMtuRequest) -> operations.GetNetworkSwitchMtuResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_mtu_200_application_json_object = out

        return res

    
    
    def get_network_switch_port_schedules(self, request: operations.GetNetworkSwitchPortSchedulesRequest) -> operations.GetNetworkSwitchPortSchedulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchPortSchedulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_port_schedules_200_application_json_object = out

        return res

    
    
    def get_network_switch_qos_rule(self, request: operations.GetNetworkSwitchQosRuleRequest) -> operations.GetNetworkSwitchQosRuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rule_200_application_json_object = out

        return res

    
    
    def get_network_switch_qos_rules(self, request: operations.GetNetworkSwitchQosRulesRequest) -> operations.GetNetworkSwitchQosRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_200_application_json_object = out

        return res

    
    
    def get_network_switch_qos_rules_order(self, request: operations.GetNetworkSwitchQosRulesOrderRequest) -> operations.GetNetworkSwitchQosRulesOrderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_order_200_application_json_object = out

        return res

    
    
    def get_network_switch_routing_multicast(self, request: operations.GetNetworkSwitchRoutingMulticastRequest) -> operations.GetNetworkSwitchRoutingMulticastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    
    def get_network_switch_routing_multicast_rendezvous_point(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    
    def get_network_switch_routing_multicast_rendezvous_points(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_points_200_application_json_object = out

        return res

    
    
    def get_network_switch_routing_ospf(self, request: operations.GetNetworkSwitchRoutingOspfRequest) -> operations.GetNetworkSwitchRoutingOspfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    
    def get_network_switch_settings(self, request: operations.GetNetworkSwitchSettingsRequest) -> operations.GetNetworkSwitchSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_settings_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack(self, request: operations.GetNetworkSwitchStackRequest) -> operations.GetNetworkSwitchStackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack_routing_interface(self, request: operations.GetNetworkSwitchStackRoutingInterfaceRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack_routing_interface_dhcp(self, request: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack_routing_interfaces(self, request: operations.GetNetworkSwitchStackRoutingInterfacesRequest) -> operations.GetNetworkSwitchStackRoutingInterfacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interfaces_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack_routing_static_route(self, request: operations.GetNetworkSwitchStackRoutingStaticRouteRequest) -> operations.GetNetworkSwitchStackRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    
    def get_network_switch_stack_routing_static_routes(self, request: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) -> operations.GetNetworkSwitchStackRoutingStaticRoutesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_routes_200_application_json_object = out

        return res

    
    
    def get_network_switch_stacks(self, request: operations.GetNetworkSwitchStacksRequest) -> operations.GetNetworkSwitchStacksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStacksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stacks_200_application_json_object = out

        return res

    
    
    def get_network_switch_storm_control(self, request: operations.GetNetworkSwitchStormControlRequest) -> operations.GetNetworkSwitchStormControlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_storm_control_200_application_json_object = out

        return res

    
    
    def get_network_switch_stp(self, request: operations.GetNetworkSwitchStpRequest) -> operations.GetNetworkSwitchStpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stp_200_application_json_object = out

        return res

    
    
    def get_network_syslog_servers(self, request: operations.GetNetworkSyslogServersRequest) -> operations.GetNetworkSyslogServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_syslog_servers_200_application_json_object = out

        return res

    
    
    def get_network_traffic(self, request: operations.GetNetworkTrafficRequest) -> operations.GetNetworkTrafficResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/traffic", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_200_application_json_object = out

        return res

    
    
    def get_network_traffic_analysis(self, request: operations.GetNetworkTrafficAnalysisRequest) -> operations.GetNetworkTrafficAnalysisResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_analysis_200_application_json_object = out

        return res

    
    
    def get_network_traffic_shaping_application_categories(self, request: operations.GetNetworkTrafficShapingApplicationCategoriesRequest) -> operations.GetNetworkTrafficShapingApplicationCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/applicationCategories", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_application_categories_200_application_json_object = out

        return res

    
    
    def get_network_traffic_shaping_dscp_tagging_options(self, request: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest) -> operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/dscpTaggingOptions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_dscp_tagging_options_200_application_json_object = out

        return res

    
    
    def get_network_webhooks_http_server(self, request: operations.GetNetworkWebhooksHTTPServerRequest) -> operations.GetNetworkWebhooksHTTPServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_server_200_application_json_object = out

        return res

    
    
    def get_network_webhooks_http_servers(self, request: operations.GetNetworkWebhooksHTTPServersRequest) -> operations.GetNetworkWebhooksHTTPServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_servers_200_application_json_object = out

        return res

    
    
    def get_network_webhooks_webhook_test(self, request: operations.GetNetworkWebhooksWebhookTestRequest) -> operations.GetNetworkWebhooksWebhookTestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests/{webhookTestId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_webhook_test_200_application_json_object = out

        return res

    
    
    def get_network_wireless_air_marshal(self, request: operations.GetNetworkWirelessAirMarshalRequest) -> operations.GetNetworkWirelessAirMarshalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/airMarshal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAirMarshalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_air_marshal_200_application_json_object = out

        return res

    
    
    def get_network_wireless_alternate_management_interface(self, request: operations.GetNetworkWirelessAlternateManagementInterfaceRequest) -> operations.GetNetworkWirelessAlternateManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    
    def get_network_wireless_billing(self, request: operations.GetNetworkWirelessBillingRequest) -> operations.GetNetworkWirelessBillingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_billing_200_application_json_object = out

        return res

    
    
    def get_network_wireless_bluetooth_settings(self, request: operations.GetNetworkWirelessBluetoothSettingsRequest) -> operations.GetNetworkWirelessBluetoothSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    
    def get_network_wireless_channel_utilization_history(self, request: operations.GetNetworkWirelessChannelUtilizationHistoryRequest) -> operations.GetNetworkWirelessChannelUtilizationHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/channelUtilizationHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessChannelUtilizationHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_channel_utilization_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_client_connection_stats(self, request: operations.GetNetworkWirelessClientConnectionStatsRequest) -> operations.GetNetworkWirelessClientConnectionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connection_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_client_connectivity_events(self, request: operations.GetNetworkWirelessClientConnectivityEventsRequest) -> operations.GetNetworkWirelessClientConnectivityEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectivityEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectivityEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connectivity_events_200_application_json_object = out

        return res

    
    
    def get_network_wireless_client_count_history(self, request: operations.GetNetworkWirelessClientCountHistoryRequest) -> operations.GetNetworkWirelessClientCountHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clientCountHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientCountHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_count_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_client_latency_history(self, request: operations.GetNetworkWirelessClientLatencyHistoryRequest) -> operations.GetNetworkWirelessClientLatencyHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_client_latency_stats(self, request: operations.GetNetworkWirelessClientLatencyStatsRequest) -> operations.GetNetworkWirelessClientLatencyStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_clients_connection_stats(self, request: operations.GetNetworkWirelessClientsConnectionStatsRequest) -> operations.GetNetworkWirelessClientsConnectionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_connection_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_clients_latency_stats(self, request: operations.GetNetworkWirelessClientsLatencyStatsRequest) -> operations.GetNetworkWirelessClientsLatencyStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_latency_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_connection_stats(self, request: operations.GetNetworkWirelessConnectionStatsRequest) -> operations.GetNetworkWirelessConnectionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_connection_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_data_rate_history(self, request: operations.GetNetworkWirelessDataRateHistoryRequest) -> operations.GetNetworkWirelessDataRateHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/dataRateHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDataRateHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_data_rate_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_devices_connection_stats(self, request: operations.GetNetworkWirelessDevicesConnectionStatsRequest) -> operations.GetNetworkWirelessDevicesConnectionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_connection_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_devices_latency_stats(self, request: operations.GetNetworkWirelessDevicesLatencyStatsRequest) -> operations.GetNetworkWirelessDevicesLatencyStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_latency_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_failed_connections(self, request: operations.GetNetworkWirelessFailedConnectionsRequest) -> operations.GetNetworkWirelessFailedConnectionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/failedConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessFailedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_failed_connections_200_application_json_object = out

        return res

    
    
    def get_network_wireless_latency_history(self, request: operations.GetNetworkWirelessLatencyHistoryRequest) -> operations.GetNetworkWirelessLatencyHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_latency_stats(self, request: operations.GetNetworkWirelessLatencyStatsRequest) -> operations.GetNetworkWirelessLatencyStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_stats_200_application_json_object = out

        return res

    
    
    def get_network_wireless_mesh_statuses(self, request: operations.GetNetworkWirelessMeshStatusesRequest) -> operations.GetNetworkWirelessMeshStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/meshStatuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessMeshStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_mesh_statuses_200_application_json_object = out

        return res

    
    
    def get_network_wireless_rf_profile(self, request: operations.GetNetworkWirelessRfProfileRequest) -> operations.GetNetworkWirelessRfProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    
    def get_network_wireless_rf_profiles(self, request: operations.GetNetworkWirelessRfProfilesRequest) -> operations.GetNetworkWirelessRfProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profiles_200_application_json_object = out

        return res

    
    
    def get_network_wireless_settings(self, request: operations.GetNetworkWirelessSettingsRequest) -> operations.GetNetworkWirelessSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_settings_200_application_json_object = out

        return res

    
    
    def get_network_wireless_signal_quality_history(self, request: operations.GetNetworkWirelessSignalQualityHistoryRequest) -> operations.GetNetworkWirelessSignalQualityHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/signalQualityHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSignalQualityHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_signal_quality_history_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid(self, request: operations.GetNetworkWirelessSsidRequest) -> operations.GetNetworkWirelessSsidResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_bonjour_forwarding(self, request: operations.GetNetworkWirelessSsidBonjourForwardingRequest) -> operations.GetNetworkWirelessSsidBonjourForwardingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_device_type_group_policies(self, request: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_eap_override(self, request: operations.GetNetworkWirelessSsidEapOverrideRequest) -> operations.GetNetworkWirelessSsidEapOverrideResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_hotspot20(self, request: operations.GetNetworkWirelessSsidHotspot20Request) -> operations.GetNetworkWirelessSsidHotspot20Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_identity_psk(self, request: operations.GetNetworkWirelessSsidIdentityPskRequest) -> operations.GetNetworkWirelessSsidIdentityPskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_identity_psks(self, request: operations.GetNetworkWirelessSsidIdentityPsksRequest) -> operations.GetNetworkWirelessSsidIdentityPsksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPsksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psks_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_schedules(self, request: operations.GetNetworkWirelessSsidSchedulesRequest) -> operations.GetNetworkWirelessSsidSchedulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_splash_settings(self, request: operations.GetNetworkWirelessSsidSplashSettingsRequest) -> operations.GetNetworkWirelessSsidSplashSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_traffic_shaping_rules(self, request: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.GetNetworkWirelessSsidTrafficShapingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssid_vpn(self, request: operations.GetNetworkWirelessSsidVpnRequest) -> operations.GetNetworkWirelessSsidVpnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    
    
    def get_network_wireless_ssids(self, request: operations.GetNetworkWirelessSsidsRequest) -> operations.GetNetworkWirelessSsidsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssids_200_application_json_object = out

        return res

    
    
    def get_network_wireless_usage_history(self, request: operations.GetNetworkWirelessUsageHistoryRequest) -> operations.GetNetworkWirelessUsageHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_usage_history_200_application_json_object = out

        return res

    
    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_200_application_json_object = out

        return res

    
    
    def get_organization_action_batch(self, request: operations.GetOrganizationActionBatchRequest) -> operations.GetOrganizationActionBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batch_200_application_json_object = out

        return res

    
    
    def get_organization_action_batches(self, request: operations.GetOrganizationActionBatchesRequest) -> operations.GetOrganizationActionBatchesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batches_200_application_json_object = out

        return res

    
    
    def get_organization_adaptive_policy_acl(self, request: operations.GetOrganizationAdaptivePolicyACLRequest) -> operations.GetOrganizationAdaptivePolicyACLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    
    def get_organization_adaptive_policy_acls(self, request: operations.GetOrganizationAdaptivePolicyAclsRequest) -> operations.GetOrganizationAdaptivePolicyAclsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyAclsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acls_200_application_json_object = out

        return res

    
    
    def get_organization_adaptive_policy_settings(self, request: operations.GetOrganizationAdaptivePolicySettingsRequest) -> operations.GetOrganizationAdaptivePolicySettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    
    def get_organization_admins(self, request: operations.GetOrganizationAdminsRequest) -> operations.GetOrganizationAdminsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdminsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_admins_200_application_json_object = out

        return res

    
    
    def get_organization_api_requests(self, request: operations.GetOrganizationAPIRequestsRequest) -> operations.GetOrganizationAPIRequestsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_200_application_json_object = out

        return res

    
    
    def get_organization_api_requests_overview(self, request: operations.GetOrganizationAPIRequestsOverviewRequest) -> operations.GetOrganizationAPIRequestsOverviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsOverviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_overview_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_security_events(self, request: operations.GetOrganizationApplianceSecurityEventsRequest) -> operations.GetOrganizationApplianceSecurityEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_events_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_security_intrusion(self, request: operations.GetOrganizationApplianceSecurityIntrusionRequest) -> operations.GetOrganizationApplianceSecurityIntrusionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_uplink_statuses(self, request: operations.GetOrganizationApplianceUplinkStatusesRequest) -> operations.GetOrganizationApplianceUplinkStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_uplink_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_vpn_stats(self, request: operations.GetOrganizationApplianceVpnStatsRequest) -> operations.GetOrganizationApplianceVpnStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/stats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_stats_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_vpn_statuses(self, request: operations.GetOrganizationApplianceVpnStatusesRequest) -> operations.GetOrganizationApplianceVpnStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    
    def get_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    
    
    def get_organization_branding_policies(self, request: operations.GetOrganizationBrandingPoliciesRequest) -> operations.GetOrganizationBrandingPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_200_application_json_object = out

        return res

    
    
    def get_organization_branding_policies_priorities(self, request: operations.GetOrganizationBrandingPoliciesPrioritiesRequest) -> operations.GetOrganizationBrandingPoliciesPrioritiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    
    def get_organization_branding_policy(self, request: operations.GetOrganizationBrandingPolicyRequest) -> operations.GetOrganizationBrandingPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policy_200_application_json_object = out

        return res

    
    
    def get_organization_camera_onboarding_statuses(self, request: operations.GetOrganizationCameraOnboardingStatusesRequest) -> operations.GetOrganizationCameraOnboardingStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_cellular_gateway_uplink_statuses(self, request: operations.GetOrganizationCellularGatewayUplinkStatusesRequest) -> operations.GetOrganizationCellularGatewayUplinkStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCellularGatewayUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_cellular_gateway_uplink_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_config_template(self, request: operations.GetOrganizationConfigTemplateRequest) -> operations.GetOrganizationConfigTemplateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_200_application_json_object = out

        return res

    
    
    def get_organization_config_template_switch_profile_port(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    
    def get_organization_config_template_switch_profile_ports(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_ports_200_application_json_object = out

        return res

    
    
    def get_organization_config_template_switch_profiles(self, request: operations.GetOrganizationConfigTemplateSwitchProfilesRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profiles_200_application_json_object = out

        return res

    
    
    def get_organization_config_templates(self, request: operations.GetOrganizationConfigTemplatesRequest) -> operations.GetOrganizationConfigTemplatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_templates_200_application_json_object = out

        return res

    
    
    def get_organization_configuration_changes(self, request: operations.GetOrganizationConfigurationChangesRequest) -> operations.GetOrganizationConfigurationChangesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configurationChanges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigurationChangesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_configuration_changes_200_application_json_object = out

        return res

    
    
    def get_organization_devices(self, request: operations.GetOrganizationDevicesRequest) -> operations.GetOrganizationDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_200_application_json_object = out

        return res

    
    
    def get_organization_devices_statuses(self, request: operations.GetOrganizationDevicesStatusesRequest) -> operations.GetOrganizationDevicesStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_devices_uplinks_loss_and_latency(self, request: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest) -> operations.GetOrganizationDevicesUplinksLossAndLatencyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/uplinksLossAndLatency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesUplinksLossAndLatencyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_uplinks_loss_and_latency_200_application_json_object = out

        return res

    
    
    def get_organization_insight_applications(self, request: operations.GetOrganizationInsightApplicationsRequest) -> operations.GetOrganizationInsightApplicationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/applications", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightApplicationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_applications_200_application_json_object = out

        return res

    
    
    def get_organization_insight_monitored_media_server(self, request: operations.GetOrganizationInsightMonitoredMediaServerRequest) -> operations.GetOrganizationInsightMonitoredMediaServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_monitored_media_server_200_application_json_object = out

        return res

    
    
    def get_organization_insight_monitored_media_servers(self, request: operations.GetOrganizationInsightMonitoredMediaServersRequest) -> operations.GetOrganizationInsightMonitoredMediaServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightMonitoredMediaServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_monitored_media_servers_200_application_json_object = out

        return res

    
    
    def get_organization_inventory_device(self, request: operations.GetOrganizationInventoryDeviceRequest) -> operations.GetOrganizationInventoryDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices/{serial}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInventoryDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_inventory_device_200_application_json_object = out

        return res

    
    
    def get_organization_inventory_devices(self, request: operations.GetOrganizationInventoryDevicesRequest) -> operations.GetOrganizationInventoryDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInventoryDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_inventory_devices_200_application_json_object = out

        return res

    
    
    def get_organization_license(self, request: operations.GetOrganizationLicenseRequest) -> operations.GetOrganizationLicenseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_license_200_application_json_object = out

        return res

    
    
    def get_organization_licenses(self, request: operations.GetOrganizationLicensesRequest) -> operations.GetOrganizationLicensesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_200_application_json_object = out

        return res

    
    
    def get_organization_licenses_overview(self, request: operations.GetOrganizationLicensesOverviewRequest) -> operations.GetOrganizationLicensesOverviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/overview", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesOverviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_overview_200_application_json_object = out

        return res

    
    
    def get_organization_login_security(self, request: operations.GetOrganizationLoginSecurityRequest) -> operations.GetOrganizationLoginSecurityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_login_security_200_application_json_object = out

        return res

    
    
    def get_organization_networks(self, request: operations.GetOrganizationNetworksRequest) -> operations.GetOrganizationNetworksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_networks_200_application_json_object = out

        return res

    
    
    def get_organization_openapi_spec(self, request: operations.GetOrganizationOpenapiSpecRequest) -> operations.GetOrganizationOpenapiSpecResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/openapiSpec", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationOpenapiSpecResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_openapi_spec_200_application_json_object = out

        return res

    
    
    def get_organization_saml(self, request: operations.GetOrganizationSamlRequest) -> operations.GetOrganizationSamlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_200_application_json_object = out

        return res

    
    
    def get_organization_saml_idp(self, request: operations.GetOrganizationSamlIdpRequest) -> operations.GetOrganizationSamlIdpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idp_200_application_json_object = out

        return res

    
    
    def get_organization_saml_idps(self, request: operations.GetOrganizationSamlIdpsRequest) -> operations.GetOrganizationSamlIdpsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idps_200_application_json_object = out

        return res

    
    
    def get_organization_saml_role(self, request: operations.GetOrganizationSamlRoleRequest) -> operations.GetOrganizationSamlRoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_role_200_application_json_object = out

        return res

    
    
    def get_organization_saml_roles(self, request: operations.GetOrganizationSamlRolesRequest) -> operations.GetOrganizationSamlRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRolesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_roles_200_application_json_object = out

        return res

    
    
    def get_organization_sm_apns_cert(self, request: operations.GetOrganizationSmApnsCertRequest) -> operations.GetOrganizationSmApnsCertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/apnsCert", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmApnsCertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_apns_cert_200_application_json_object = out

        return res

    
    
    def get_organization_sm_vpp_account(self, request: operations.GetOrganizationSmVppAccountRequest) -> operations.GetOrganizationSmVppAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts/{vppAccountId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_account_200_application_json_object = out

        return res

    
    
    def get_organization_sm_vpp_accounts(self, request: operations.GetOrganizationSmVppAccountsRequest) -> operations.GetOrganizationSmVppAccountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_accounts_200_application_json_object = out

        return res

    
    
    def get_organization_snmp(self, request: operations.GetOrganizationSnmpRequest) -> operations.GetOrganizationSnmpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_snmp_200_application_json_object = out

        return res

    
    
    def get_organization_uplinks_statuses(self, request: operations.GetOrganizationUplinksStatusesRequest) -> operations.GetOrganizationUplinksStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/uplinks/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationUplinksStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_uplinks_statuses_200_application_json_object = out

        return res

    
    
    def get_organization_webhooks_alert_types(self, request: operations.GetOrganizationWebhooksAlertTypesRequest) -> operations.GetOrganizationWebhooksAlertTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/alertTypes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksAlertTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_alert_types_200_application_json_object = out

        return res

    
    
    def get_organization_webhooks_logs(self, request: operations.GetOrganizationWebhooksLogsRequest) -> operations.GetOrganizationWebhooksLogsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksLogsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_logs_200_application_json_object = out

        return res

    
    
    def get_organizations(self) -> operations.GetOrganizationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/organizations"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organizations_200_application_json_object = out

        return res

    
    
    def lock_network_sm_devices(self, request: operations.LockNetworkSmDevicesRequest) -> operations.LockNetworkSmDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/lock", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LockNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.lock_network_sm_devices_200_application_json_object = out

        return res

    
    
    def modify_network_sm_devices_tags(self, request: operations.ModifyNetworkSmDevicesTagsRequest) -> operations.ModifyNetworkSmDevicesTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/modifyTags", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyNetworkSmDevicesTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_network_sm_devices_tags_200_application_json_object = out

        return res

    
    
    def move_network_sm_devices(self, request: operations.MoveNetworkSmDevicesRequest) -> operations.MoveNetworkSmDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/move", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_network_sm_devices_200_application_json_object = out

        return res

    
    
    def move_organization_licenses(self, request: operations.MoveOrganizationLicensesRequest) -> operations.MoveOrganizationLicensesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/move", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_200_application_json_object = out

        return res

    
    
    def move_organization_licenses_seats(self, request: operations.MoveOrganizationLicensesSeatsRequest) -> operations.MoveOrganizationLicensesSeatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/moveSeats", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_seats_200_application_json_object = out

        return res

    
    
    def provision_network_clients(self, request: operations.ProvisionNetworkClientsRequest) -> operations.ProvisionNetworkClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/provision", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvisionNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.provision_network_clients_201_application_json_object = out

        return res

    
    
    def reboot_device(self, request: operations.RebootDeviceRequest) -> operations.RebootDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/reboot", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RebootDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reboot_device_202_application_json_object = out

        return res

    
    
    def refresh_network_sm_device_details(self, request: operations.RefreshNetworkSmDeviceDetailsRequest) -> operations.RefreshNetworkSmDeviceDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/refreshDetails", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshNetworkSmDeviceDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def remove_network_devices(self, request: operations.RemoveNetworkDevicesRequest) -> operations.RemoveNetworkDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/remove", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def remove_network_switch_stack(self, request: operations.RemoveNetworkSwitchStackRequest) -> operations.RemoveNetworkSwitchStackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.remove_network_switch_stack_200_application_json_object = out

        return res

    
    
    def renew_organization_licenses_seats(self, request: operations.RenewOrganizationLicensesSeatsRequest) -> operations.RenewOrganizationLicensesSeatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/renewSeats", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RenewOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.renew_organization_licenses_seats_200_application_json_object = out

        return res

    
    
    def split_network(self, request: operations.SplitNetworkRequest) -> operations.SplitNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/split", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SplitNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.split_network_200_application_json_object = out

        return res

    
    
    def swap_network_appliance_warm_spare(self, request: operations.SwapNetworkApplianceWarmSpareRequest) -> operations.SwapNetworkApplianceWarmSpareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare/swap", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SwapNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.swap_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    
    def unbind_network(self, request: operations.UnbindNetworkRequest) -> operations.UnbindNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/unbind", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnbindNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unbind_network_200_application_json_object = out

        return res

    
    
    def unenroll_network_sm_device(self, request: operations.UnenrollNetworkSmDeviceRequest) -> operations.UnenrollNetworkSmDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/unenroll", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnenrollNetworkSmDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unenroll_network_sm_device_200_application_json_object = out

        return res

    
    
    def update_device(self, request: operations.UpdateDeviceRequest) -> operations.UpdateDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_200_application_json_object = out

        return res

    
    
    def update_device_camera_quality_and_retention(self, request: operations.UpdateDeviceCameraQualityAndRetentionRequest) -> operations.UpdateDeviceCameraQualityAndRetentionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    
    def update_device_camera_sense(self, request: operations.UpdateDeviceCameraSenseRequest) -> operations.UpdateDeviceCameraSenseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_sense_200_application_json_object = out

        return res

    
    
    def update_device_camera_video_settings(self, request: operations.UpdateDeviceCameraVideoSettingsRequest) -> operations.UpdateDeviceCameraVideoSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_video_settings_200_application_json_object = out

        return res

    
    
    def update_device_camera_wireless_profiles(self, request: operations.UpdateDeviceCameraWirelessProfilesRequest) -> operations.UpdateDeviceCameraWirelessProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    
    def update_device_cellular_gateway_lan(self, request: operations.UpdateDeviceCellularGatewayLanRequest) -> operations.UpdateDeviceCellularGatewayLanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    
    def update_device_cellular_gateway_port_forwarding_rules(self, request: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest) -> operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

        return res

    
    
    def update_device_management_interface(self, request: operations.UpdateDeviceManagementInterfaceRequest) -> operations.UpdateDeviceManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_management_interface_200_application_json_object = out

        return res

    
    
    def update_device_switch_port(self, request: operations.UpdateDeviceSwitchPortRequest) -> operations.UpdateDeviceSwitchPortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_port_200_application_json_object = out

        return res

    
    
    def update_device_switch_routing_interface(self, request: operations.UpdateDeviceSwitchRoutingInterfaceRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_200_application_json_object = out

        return res

    
    
    def update_device_switch_routing_interface_dhcp(self, request: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    
    def update_device_switch_routing_static_route(self, request: operations.UpdateDeviceSwitchRoutingStaticRouteRequest) -> operations.UpdateDeviceSwitchRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    
    def update_device_switch_warm_spare(self, request: operations.UpdateDeviceSwitchWarmSpareRequest) -> operations.UpdateDeviceSwitchWarmSpareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_warm_spare_200_application_json_object = out

        return res

    
    
    def update_device_wireless_bluetooth_settings(self, request: operations.UpdateDeviceWirelessBluetoothSettingsRequest) -> operations.UpdateDeviceWirelessBluetoothSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    
    def update_device_wireless_radio_settings(self, request: operations.UpdateDeviceWirelessRadioSettingsRequest) -> operations.UpdateDeviceWirelessRadioSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    
    def update_network(self, request: operations.UpdateNetworkRequest) -> operations.UpdateNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_200_application_json_object = out

        return res

    
    
    def update_network_alerts_settings(self, request: operations.UpdateNetworkAlertsSettingsRequest) -> operations.UpdateNetworkAlertsSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_alerts_settings_200_application_json_object = out

        return res

    
    
    def update_network_appliance_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    
    def update_network_appliance_content_filtering(self, request: operations.UpdateNetworkApplianceContentFilteringRequest) -> operations.UpdateNetworkApplianceContentFilteringResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_cellular_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_firewalled_service(self, request: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest) -> operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_inbound_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_firewall_port_forwarding_rules(self, request: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_port(self, request: operations.UpdateNetworkAppliancePortRequest) -> operations.UpdateNetworkAppliancePortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_port_200_application_json_object = out

        return res

    
    
    def update_network_appliance_security_intrusion(self, request: operations.UpdateNetworkApplianceSecurityIntrusionRequest) -> operations.UpdateNetworkApplianceSecurityIntrusionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    
    def update_network_appliance_security_malware(self, request: operations.UpdateNetworkApplianceSecurityMalwareRequest) -> operations.UpdateNetworkApplianceSecurityMalwareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_malware_200_application_json_object = out

        return res

    
    
    def update_network_appliance_single_lan(self, request: operations.UpdateNetworkApplianceSingleLanRequest) -> operations.UpdateNetworkApplianceSingleLanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_single_lan_200_application_json_object = out

        return res

    
    
    def update_network_appliance_static_route(self, request: operations.UpdateNetworkApplianceStaticRouteRequest) -> operations.UpdateNetworkApplianceStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_static_route_200_application_json_object = out

        return res

    
    
    def update_network_appliance_traffic_shaping(self, request: operations.UpdateNetworkApplianceTrafficShapingRequest) -> operations.UpdateNetworkApplianceTrafficShapingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    
    def update_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    
    def update_network_appliance_traffic_shaping_rules(self, request: operations.UpdateNetworkApplianceTrafficShapingRulesRequest) -> operations.UpdateNetworkApplianceTrafficShapingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    
    def update_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    
    def update_network_appliance_traffic_shaping_uplink_selection(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    
    def update_network_appliance_vlan(self, request: operations.UpdateNetworkApplianceVlanRequest) -> operations.UpdateNetworkApplianceVlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlan_200_application_json_object = out

        return res

    
    
    def update_network_appliance_vlans_settings(self, request: operations.UpdateNetworkApplianceVlansSettingsRequest) -> operations.UpdateNetworkApplianceVlansSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    
    def update_network_appliance_vpn_bgp(self, request: operations.UpdateNetworkApplianceVpnBgpRequest) -> operations.UpdateNetworkApplianceVpnBgpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    
    def update_network_appliance_vpn_site_to_site_vpn(self, request: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    
    def update_network_appliance_warm_spare(self, request: operations.UpdateNetworkApplianceWarmSpareRequest) -> operations.UpdateNetworkApplianceWarmSpareResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    
    def update_network_camera_quality_retention_profile(self, request: operations.UpdateNetworkCameraQualityRetentionProfileRequest) -> operations.UpdateNetworkCameraQualityRetentionProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    
    def update_network_camera_wireless_profile(self, request: operations.UpdateNetworkCameraWirelessProfileRequest) -> operations.UpdateNetworkCameraWirelessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    
    def update_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    
    def update_network_cellular_gateway_dhcp(self, request: operations.UpdateNetworkCellularGatewayDhcpRequest) -> operations.UpdateNetworkCellularGatewayDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    
    def update_network_cellular_gateway_subnet_pool(self, request: operations.UpdateNetworkCellularGatewaySubnetPoolRequest) -> operations.UpdateNetworkCellularGatewaySubnetPoolResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    
    def update_network_cellular_gateway_uplink(self, request: operations.UpdateNetworkCellularGatewayUplinkRequest) -> operations.UpdateNetworkCellularGatewayUplinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    
    def update_network_client_policy(self, request: operations.UpdateNetworkClientPolicyRequest) -> operations.UpdateNetworkClientPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_policy_200_application_json_object = out

        return res

    
    
    def update_network_client_splash_authorization_status(self, request: operations.UpdateNetworkClientSplashAuthorizationStatusRequest) -> operations.UpdateNetworkClientSplashAuthorizationStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    
    def update_network_firmware_upgrades(self, request: operations.UpdateNetworkFirmwareUpgradesRequest) -> operations.UpdateNetworkFirmwareUpgradesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_firmware_upgrades_200_application_json_object = out

        return res

    
    
    def update_network_floor_plan(self, request: operations.UpdateNetworkFloorPlanRequest) -> operations.UpdateNetworkFloorPlanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_floor_plan_200_application_json_object = out

        return res

    
    
    def update_network_group_policy(self, request: operations.UpdateNetworkGroupPolicyRequest) -> operations.UpdateNetworkGroupPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_group_policy_200_application_json_object = out

        return res

    
    
    def update_network_meraki_auth_user(self, request: operations.UpdateNetworkMerakiAuthUserRequest) -> operations.UpdateNetworkMerakiAuthUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_meraki_auth_user_200_application_json_object = out

        return res

    
    
    def update_network_mqtt_broker(self, request: operations.UpdateNetworkMqttBrokerRequest) -> operations.UpdateNetworkMqttBrokerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_mqtt_broker_200_application_json_object = out

        return res

    
    
    def update_network_netflow(self, request: operations.UpdateNetworkNetflowRequest) -> operations.UpdateNetworkNetflowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_netflow_200_application_json_object = out

        return res

    
    
    def update_network_settings(self, request: operations.UpdateNetworkSettingsRequest) -> operations.UpdateNetworkSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_settings_200_application_json_object = out

        return res

    
    
    def update_network_sm_devices_fields(self, request: operations.UpdateNetworkSmDevicesFieldsRequest) -> operations.UpdateNetworkSmDevicesFieldsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/fields", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmDevicesFieldsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_devices_fields_200_application_json_object = out

        return res

    
    
    def update_network_sm_target_group(self, request: operations.UpdateNetworkSmTargetGroupRequest) -> operations.UpdateNetworkSmTargetGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_target_group_200_application_json_object = out

        return res

    
    
    def update_network_snmp(self, request: operations.UpdateNetworkSnmpRequest) -> operations.UpdateNetworkSnmpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_snmp_200_application_json_object = out

        return res

    
    
    def update_network_switch_access_control_lists(self, request: operations.UpdateNetworkSwitchAccessControlListsRequest) -> operations.UpdateNetworkSwitchAccessControlListsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    
    def update_network_switch_access_policy(self, request: operations.UpdateNetworkSwitchAccessPolicyRequest) -> operations.UpdateNetworkSwitchAccessPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_policy_200_application_json_object = out

        return res

    
    
    def update_network_switch_alternate_management_interface(self, request: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest) -> operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    
    def update_network_switch_dhcp_server_policy(self, request: operations.UpdateNetworkSwitchDhcpServerPolicyRequest) -> operations.UpdateNetworkSwitchDhcpServerPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    
    def update_network_switch_dscp_to_cos_mappings(self, request: operations.UpdateNetworkSwitchDscpToCosMappingsRequest) -> operations.UpdateNetworkSwitchDscpToCosMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    
    def update_network_switch_link_aggregation(self, request: operations.UpdateNetworkSwitchLinkAggregationRequest) -> operations.UpdateNetworkSwitchLinkAggregationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_link_aggregation_200_application_json_object = out

        return res

    
    
    def update_network_switch_mtu(self, request: operations.UpdateNetworkSwitchMtuRequest) -> operations.UpdateNetworkSwitchMtuResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_mtu_200_application_json_object = out

        return res

    
    
    def update_network_switch_port_schedule(self, request: operations.UpdateNetworkSwitchPortScheduleRequest) -> operations.UpdateNetworkSwitchPortScheduleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_port_schedule_200_application_json_object = out

        return res

    
    
    def update_network_switch_qos_rule(self, request: operations.UpdateNetworkSwitchQosRuleRequest) -> operations.UpdateNetworkSwitchQosRuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rule_200_application_json_object = out

        return res

    
    
    def update_network_switch_qos_rules_order(self, request: operations.UpdateNetworkSwitchQosRulesOrderRequest) -> operations.UpdateNetworkSwitchQosRulesOrderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rules_order_200_application_json_object = out

        return res

    
    
    def update_network_switch_routing_multicast(self, request: operations.UpdateNetworkSwitchRoutingMulticastRequest) -> operations.UpdateNetworkSwitchRoutingMulticastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    
    def update_network_switch_routing_multicast_rendezvous_point(self, request: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    
    def update_network_switch_routing_ospf(self, request: operations.UpdateNetworkSwitchRoutingOspfRequest) -> operations.UpdateNetworkSwitchRoutingOspfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    
    def update_network_switch_settings(self, request: operations.UpdateNetworkSwitchSettingsRequest) -> operations.UpdateNetworkSwitchSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_settings_200_application_json_object = out

        return res

    
    
    def update_network_switch_stack_routing_interface(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    
    def update_network_switch_stack_routing_interface_dhcp(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    
    def update_network_switch_stack_routing_static_route(self, request: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    
    def update_network_switch_storm_control(self, request: operations.UpdateNetworkSwitchStormControlRequest) -> operations.UpdateNetworkSwitchStormControlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_storm_control_200_application_json_object = out

        return res

    
    
    def update_network_switch_stp(self, request: operations.UpdateNetworkSwitchStpRequest) -> operations.UpdateNetworkSwitchStpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stp_200_application_json_object = out

        return res

    
    
    def update_network_syslog_servers(self, request: operations.UpdateNetworkSyslogServersRequest) -> operations.UpdateNetworkSyslogServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_syslog_servers_200_application_json_object = out

        return res

    
    
    def update_network_traffic_analysis(self, request: operations.UpdateNetworkTrafficAnalysisRequest) -> operations.UpdateNetworkTrafficAnalysisResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_traffic_analysis_200_application_json_object = out

        return res

    
    
    def update_network_webhooks_http_server(self, request: operations.UpdateNetworkWebhooksHTTPServerRequest) -> operations.UpdateNetworkWebhooksHTTPServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_webhooks_http_server_200_application_json_object = out

        return res

    
    
    def update_network_wireless_alternate_management_interface(self, request: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest) -> operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    
    def update_network_wireless_billing(self, request: operations.UpdateNetworkWirelessBillingRequest) -> operations.UpdateNetworkWirelessBillingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_billing_200_application_json_object = out

        return res

    
    
    def update_network_wireless_bluetooth_settings(self, request: operations.UpdateNetworkWirelessBluetoothSettingsRequest) -> operations.UpdateNetworkWirelessBluetoothSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    
    def update_network_wireless_rf_profile(self, request: operations.UpdateNetworkWirelessRfProfileRequest) -> operations.UpdateNetworkWirelessRfProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    
    def update_network_wireless_settings(self, request: operations.UpdateNetworkWirelessSettingsRequest) -> operations.UpdateNetworkWirelessSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_settings_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid(self, request: operations.UpdateNetworkWirelessSsidRequest) -> operations.UpdateNetworkWirelessSsidResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_bonjour_forwarding(self, request: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest) -> operations.UpdateNetworkWirelessSsidBonjourForwardingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_device_type_group_policies(self, request: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_eap_override(self, request: operations.UpdateNetworkWirelessSsidEapOverrideRequest) -> operations.UpdateNetworkWirelessSsidEapOverrideResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_hotspot20(self, request: operations.UpdateNetworkWirelessSsidHotspot20Request) -> operations.UpdateNetworkWirelessSsidHotspot20Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_identity_psk(self, request: operations.UpdateNetworkWirelessSsidIdentityPskRequest) -> operations.UpdateNetworkWirelessSsidIdentityPskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_schedules(self, request: operations.UpdateNetworkWirelessSsidSchedulesRequest) -> operations.UpdateNetworkWirelessSsidSchedulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_splash_settings(self, request: operations.UpdateNetworkWirelessSsidSplashSettingsRequest) -> operations.UpdateNetworkWirelessSsidSplashSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_traffic_shaping_rules(self, request: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    
    def update_network_wireless_ssid_vpn(self, request: operations.UpdateNetworkWirelessSsidVpnRequest) -> operations.UpdateNetworkWirelessSsidVpnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    
    
    def update_organization(self, request: operations.UpdateOrganizationRequest) -> operations.UpdateOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_200_application_json_object = out

        return res

    
    
    def update_organization_action_batch(self, request: operations.UpdateOrganizationActionBatchRequest) -> operations.UpdateOrganizationActionBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_action_batch_200_application_json_object = out

        return res

    
    
    def update_organization_adaptive_policy_acl(self, request: operations.UpdateOrganizationAdaptivePolicyACLRequest) -> operations.UpdateOrganizationAdaptivePolicyACLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    
    def update_organization_adaptive_policy_settings(self, request: operations.UpdateOrganizationAdaptivePolicySettingsRequest) -> operations.UpdateOrganizationAdaptivePolicySettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    
    def update_organization_admin(self, request: operations.UpdateOrganizationAdminRequest) -> operations.UpdateOrganizationAdminResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_admin_200_application_json_object = out

        return res

    
    
    def update_organization_appliance_security_intrusion(self, request: operations.UpdateOrganizationApplianceSecurityIntrusionRequest) -> operations.UpdateOrganizationApplianceSecurityIntrusionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    
    def update_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    
    def update_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    
    
    def update_organization_branding_policies_priorities(self, request: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest) -> operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    
    def update_organization_branding_policy(self, request: operations.UpdateOrganizationBrandingPolicyRequest) -> operations.UpdateOrganizationBrandingPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policy_200_application_json_object = out

        return res

    
    
    def update_organization_camera_onboarding_statuses(self, request: operations.UpdateOrganizationCameraOnboardingStatusesRequest) -> operations.UpdateOrganizationCameraOnboardingStatusesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    
    
    def update_organization_config_template(self, request: operations.UpdateOrganizationConfigTemplateRequest) -> operations.UpdateOrganizationConfigTemplateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_200_application_json_object = out

        return res

    
    
    def update_organization_config_template_switch_profile_port(self, request: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    
    def update_organization_insight_monitored_media_server(self, request: operations.UpdateOrganizationInsightMonitoredMediaServerRequest) -> operations.UpdateOrganizationInsightMonitoredMediaServerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_insight_monitored_media_server_200_application_json_object = out

        return res

    
    
    def update_organization_license(self, request: operations.UpdateOrganizationLicenseRequest) -> operations.UpdateOrganizationLicenseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_license_200_application_json_object = out

        return res

    
    
    def update_organization_login_security(self, request: operations.UpdateOrganizationLoginSecurityRequest) -> operations.UpdateOrganizationLoginSecurityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_login_security_200_application_json_object = out

        return res

    
    
    def update_organization_saml(self, request: operations.UpdateOrganizationSamlRequest) -> operations.UpdateOrganizationSamlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_200_application_json_object = out

        return res

    
    
    def update_organization_saml_idp(self, request: operations.UpdateOrganizationSamlIdpRequest) -> operations.UpdateOrganizationSamlIdpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_idp_200_application_json_object = out

        return res

    
    
    def update_organization_saml_role(self, request: operations.UpdateOrganizationSamlRoleRequest) -> operations.UpdateOrganizationSamlRoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_role_200_application_json_object = out

        return res

    
    
    def update_organization_snmp(self, request: operations.UpdateOrganizationSnmpRequest) -> operations.UpdateOrganizationSnmpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_snmp_200_application_json_object = out

        return res

    
    
    def wipe_network_sm_devices(self, request: operations.WipeNetworkSmDevicesRequest) -> operations.WipeNetworkSmDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/wipe", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WipeNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.wipe_network_sm_devices_200_application_json_object = out

        return res

    