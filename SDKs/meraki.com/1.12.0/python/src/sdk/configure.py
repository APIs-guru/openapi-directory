import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Configure:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def add_network_switch_stack(self, request: operations.AddNetworkSwitchStackRequest) -> operations.AddNetworkSwitchStackResponse:
        r"""Add a switch to a stack
        Add a switch to a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/add", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.add_network_switch_stack_200_application_json_object = out

        return res

    
    def assign_organization_licenses_seats(self, request: operations.AssignOrganizationLicensesSeatsRequest) -> operations.AssignOrganizationLicensesSeatsResponse:
        r"""Assign SM seats to a network
        Assign SM seats to a network. This will increase the managed SM device limit of the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/assignSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.assign_organization_licenses_seats_200_application_json_object = out

        return res

    
    def bind_network(self, request: operations.BindNetworkRequest) -> operations.BindNetworkResponse:
        r"""Bind a network to a template.
        Bind a network to a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bind", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BindNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bind_network_200_application_json_object = out

        return res

    
    def checkin_network_sm_devices(self, request: operations.CheckinNetworkSmDevicesRequest) -> operations.CheckinNetworkSmDevicesResponse:
        r"""Force check-in a set of devices
        Force check-in a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/checkin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckinNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.checkin_network_sm_devices_200_application_json_object = out

        return res

    
    def claim_into_organization(self, request: operations.ClaimIntoOrganizationRequest) -> operations.ClaimIntoOrganizationResponse:
        r"""Claim a list of devices, licenses, and/or orders into an organization
        Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimIntoOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.claim_into_organization_200_application_json_object = out

        return res

    
    def claim_network_devices(self, request: operations.ClaimNetworkDevicesRequest) -> operations.ClaimNetworkDevicesResponse:
        r"""Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def clone_organization(self, request: operations.CloneOrganizationRequest) -> operations.CloneOrganizationResponse:
        r"""Create a new organization by cloning the addressed organization
        Create a new organization by cloning the addressed organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_201_application_json_object = out

        return res

    
    def clone_organization_switch_devices(self, request: operations.CloneOrganizationSwitchDevicesRequest) -> operations.CloneOrganizationSwitchDevicesResponse:
        r"""Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
        Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/switch/devices/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationSwitchDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_switch_devices_200_application_json_object = out

        return res

    
    def combine_organization_networks(self, request: operations.CombineOrganizationNetworksRequest) -> operations.CombineOrganizationNetworksResponse:
        r"""Combine multiple networks into a single network
        Combine multiple networks into a single network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks/combine", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CombineOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.combine_organization_networks_200_application_json_object = out

        return res

    
    def create_device_switch_routing_interface(self, request: operations.CreateDeviceSwitchRoutingInterfaceRequest) -> operations.CreateDeviceSwitchRoutingInterfaceResponse:
        r"""Create a layer 3 interface for a switch
        Create a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_interface_201_application_json_object = out

        return res

    
    def create_device_switch_routing_static_route(self, request: operations.CreateDeviceSwitchRoutingStaticRouteRequest) -> operations.CreateDeviceSwitchRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch
        Create a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_static_route_201_application_json_object = out

        return res

    
    def create_network_appliance_static_route(self, request: operations.CreateNetworkApplianceStaticRouteRequest) -> operations.CreateNetworkApplianceStaticRouteResponse:
        r"""Add a static route for an MX or teleworker network
        Add a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_static_route_201_application_json_object = out

        return res

    
    def create_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Add a custom performance class for an MX network
        Add a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object = out

        return res

    
    def create_network_appliance_vlan(self, request: operations.CreateNetworkApplianceVlanRequest) -> operations.CreateNetworkApplianceVlanResponse:
        r"""Add a VLAN
        Add a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_vlan_201_application_json_object = out

        return res

    
    def create_network_camera_quality_retention_profile(self, request: operations.CreateNetworkCameraQualityRetentionProfileRequest) -> operations.CreateNetworkCameraQualityRetentionProfileResponse:
        r"""Creates new quality retention profile for this network.
        Creates new quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def create_network_camera_wireless_profile(self, request: operations.CreateNetworkCameraWirelessProfileRequest) -> operations.CreateNetworkCameraWirelessProfileResponse:
        r"""Creates a new camera wireless profile for this network.
        Creates a new camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def create_network_firmware_upgrades_rollback(self, request: operations.CreateNetworkFirmwareUpgradesRollbackRequest) -> operations.CreateNetworkFirmwareUpgradesRollbackResponse:
        r"""Rollback a Firmware Upgrade For A Network
        Rollback a Firmware Upgrade For A Network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades/rollbacks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFirmwareUpgradesRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_firmware_upgrades_rollback_200_application_json_object = out

        return res

    
    def create_network_floor_plan(self, request: operations.CreateNetworkFloorPlanRequest) -> operations.CreateNetworkFloorPlanResponse:
        r"""Upload a floor plan
        Upload a floor plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_floor_plan_201_application_json_object = out

        return res

    
    def create_network_group_policy(self, request: operations.CreateNetworkGroupPolicyRequest) -> operations.CreateNetworkGroupPolicyResponse:
        r"""Create a group policy
        Create a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_group_policy_201_application_json_object = out

        return res

    
    def create_network_meraki_auth_user(self, request: operations.CreateNetworkMerakiAuthUserRequest) -> operations.CreateNetworkMerakiAuthUserResponse:
        r"""Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_meraki_auth_user_201_application_json_object = out

        return res

    
    def create_network_mqtt_broker(self, request: operations.CreateNetworkMqttBrokerRequest) -> operations.CreateNetworkMqttBrokerResponse:
        r"""Add an MQTT broker
        Add an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_mqtt_broker_201_application_json_object = out

        return res

    
    def create_network_pii_request(self, request: operations.CreateNetworkPiiRequestRequest) -> operations.CreateNetworkPiiRequestResponse:
        r"""Submit a new delete or restrict processing PII request
        Submit a new delete or restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_pii_request_201_application_json_object = out

        return res

    
    def create_network_sm_bypass_activation_lock_attempt(self, request: operations.CreateNetworkSmBypassActivationLockAttemptRequest) -> operations.CreateNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt
        Bypass activation lock attempt
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_bypass_activation_lock_attempt_201_application_json_object = out

        return res

    
    def create_network_sm_target_group(self, request: operations.CreateNetworkSmTargetGroupRequest) -> operations.CreateNetworkSmTargetGroupResponse:
        r"""Add a target group
        Add a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_target_group_201_application_json_object = out

        return res

    
    def create_network_switch_access_policy(self, request: operations.CreateNetworkSwitchAccessPolicyRequest) -> operations.CreateNetworkSwitchAccessPolicyResponse:
        r"""Create an access policy for a switch network
        Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_access_policy_201_application_json_object = out

        return res

    
    def create_network_switch_link_aggregation(self, request: operations.CreateNetworkSwitchLinkAggregationRequest) -> operations.CreateNetworkSwitchLinkAggregationResponse:
        r"""Create a link aggregation group
        Create a link aggregation group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_link_aggregation_201_application_json_object = out

        return res

    
    def create_network_switch_port_schedule(self, request: operations.CreateNetworkSwitchPortScheduleRequest) -> operations.CreateNetworkSwitchPortScheduleResponse:
        r"""Add a switch port schedule
        Add a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_port_schedule_201_application_json_object = out

        return res

    
    def create_network_switch_qos_rule(self, request: operations.CreateNetworkSwitchQosRuleRequest) -> operations.CreateNetworkSwitchQosRuleResponse:
        r"""Add a quality of service rule
        Add a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_qos_rule_201_application_json_object = out

        return res

    
    def create_network_switch_routing_multicast_rendezvous_point(self, request: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Create a multicast rendezvous point
        Create a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_routing_multicast_rendezvous_point_201_application_json_object = out

        return res

    
    def create_network_switch_stack(self, request: operations.CreateNetworkSwitchStackRequest) -> operations.CreateNetworkSwitchStackResponse:
        r"""Create a stack
        Create a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_interface(self, request: operations.CreateNetworkSwitchStackRoutingInterfaceRequest) -> operations.CreateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Create a layer 3 interface for a switch stack
        Create a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_interface_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_static_route(self, request: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.CreateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch stack
        Create a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_static_route_201_application_json_object = out

        return res

    
    def create_network_webhooks_http_server(self, request: operations.CreateNetworkWebhooksHTTPServerRequest) -> operations.CreateNetworkWebhooksHTTPServerResponse:
        r"""Add an HTTP server to a network
        Add an HTTP server to a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_http_server_201_application_json_object = out

        return res

    
    def create_network_webhooks_webhook_test(self, request: operations.CreateNetworkWebhooksWebhookTestRequest) -> operations.CreateNetworkWebhooksWebhookTestResponse:
        r"""Send a test webhook for a network
        Send a test webhook for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_webhook_test_201_application_json_object = out

        return res

    
    def create_network_wireless_rf_profile(self, request: operations.CreateNetworkWirelessRfProfileRequest) -> operations.CreateNetworkWirelessRfProfileResponse:
        r"""Creates new RF profile for this network
        Creates new RF profile for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_rf_profile_201_application_json_object = out

        return res

    
    def create_network_wireless_ssid_identity_psk(self, request: operations.CreateNetworkWirelessSsidIdentityPskRequest) -> operations.CreateNetworkWirelessSsidIdentityPskResponse:
        r"""Create an Identity PSK
        Create an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_ssid_identity_psk_201_application_json_object = out

        return res

    
    def create_organization(self, request: operations.CreateOrganizationRequest) -> operations.CreateOrganizationResponse:
        r"""Create a new organization
        Create a new organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_201_application_json_object = out

        return res

    
    def create_organization_action_batch(self, request: operations.CreateOrganizationActionBatchRequest) -> operations.CreateOrganizationActionBatchResponse:
        r"""Create an action batch
        Create an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_action_batch_201_application_json_object = out

        return res

    
    def create_organization_adaptive_policy_acl(self, request: operations.CreateOrganizationAdaptivePolicyACLRequest) -> operations.CreateOrganizationAdaptivePolicyACLResponse:
        r"""Creates new adaptive policy ACL
        Creates new adaptive policy ACL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def create_organization_admin(self, request: operations.CreateOrganizationAdminRequest) -> operations.CreateOrganizationAdminResponse:
        r"""Create a new dashboard administrator
        Create a new dashboard administrator
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_admin_201_application_json_object = out

        return res

    
    def create_organization_branding_policy(self, request: operations.CreateOrganizationBrandingPolicyRequest) -> operations.CreateOrganizationBrandingPolicyResponse:
        r"""Add a new branding policy to an organization
        Add a new branding policy to an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_branding_policy_201_application_json_object = out

        return res

    
    def create_organization_config_template(self, request: operations.CreateOrganizationConfigTemplateRequest) -> operations.CreateOrganizationConfigTemplateResponse:
        r"""Create a new configuration template
        Create a new configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_config_template_201_application_json_object = out

        return res

    
    def create_organization_insight_monitored_media_server(self, request: operations.CreateOrganizationInsightMonitoredMediaServerRequest) -> operations.CreateOrganizationInsightMonitoredMediaServerResponse:
        r"""Add a media server to be monitored for this organization
        Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_insight_monitored_media_server_201_application_json_object = out

        return res

    
    def create_organization_network(self, request: operations.CreateOrganizationNetworkRequest) -> operations.CreateOrganizationNetworkResponse:
        r"""Create a network
        Create a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_network_201_application_json_object = out

        return res

    
    def create_organization_saml_idp(self, request: operations.CreateOrganizationSamlIdpRequest) -> operations.CreateOrganizationSamlIdpResponse:
        r"""Create a SAML IdP for your organization.
        Create a SAML IdP for your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_idp_201_application_json_object = out

        return res

    
    def create_organization_saml_role(self, request: operations.CreateOrganizationSamlRoleRequest) -> operations.CreateOrganizationSamlRoleResponse:
        r"""Create a SAML role
        Create a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_role_201_application_json_object = out

        return res

    
    def delete_device_switch_routing_interface(self, request: operations.DeleteDeviceSwitchRoutingInterfaceRequest) -> operations.DeleteDeviceSwitchRoutingInterfaceResponse:
        r"""Delete a layer 3 interface from the switch
        Delete a layer 3 interface from the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_device_switch_routing_static_route(self, request: operations.DeleteDeviceSwitchRoutingStaticRouteRequest) -> operations.DeleteDeviceSwitchRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch
        Delete a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network(self, request: operations.DeleteNetworkRequest) -> operations.DeleteNetworkResponse:
        r"""Delete a network
        Delete a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_static_route(self, request: operations.DeleteNetworkApplianceStaticRouteRequest) -> operations.DeleteNetworkApplianceStaticRouteResponse:
        r"""Delete a static route from an MX or teleworker network
        Delete a static route from an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Delete a custom performance class from an MX network
        Delete a custom performance class from an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_vlan(self, request: operations.DeleteNetworkApplianceVlanRequest) -> operations.DeleteNetworkApplianceVlanResponse:
        r"""Delete a VLAN from a network
        Delete a VLAN from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_camera_quality_retention_profile(self, request: operations.DeleteNetworkCameraQualityRetentionProfileRequest) -> operations.DeleteNetworkCameraQualityRetentionProfileResponse:
        r"""Delete an existing quality retention profile for this network.
        Delete an existing quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_camera_wireless_profile(self, request: operations.DeleteNetworkCameraWirelessProfileRequest) -> operations.DeleteNetworkCameraWirelessProfileResponse:
        r"""Delete an existing camera wireless profile for this network.
        Delete an existing camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_floor_plan(self, request: operations.DeleteNetworkFloorPlanRequest) -> operations.DeleteNetworkFloorPlanResponse:
        r"""Destroy a floor plan
        Destroy a floor plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_group_policy(self, request: operations.DeleteNetworkGroupPolicyRequest) -> operations.DeleteNetworkGroupPolicyResponse:
        r"""Delete a group policy
        Delete a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_meraki_auth_user(self, request: operations.DeleteNetworkMerakiAuthUserRequest) -> operations.DeleteNetworkMerakiAuthUserResponse:
        r"""Deauthorize a user
        Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_mqtt_broker(self, request: operations.DeleteNetworkMqttBrokerRequest) -> operations.DeleteNetworkMqttBrokerResponse:
        r"""Delete an MQTT broker
        Delete an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_pii_request(self, request: operations.DeleteNetworkPiiRequestRequest) -> operations.DeleteNetworkPiiRequestResponse:
        r"""Delete a restrict processing PII request
        Delete a restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_sm_target_group(self, request: operations.DeleteNetworkSmTargetGroupRequest) -> operations.DeleteNetworkSmTargetGroupResponse:
        r"""Delete a target group from a network
        Delete a target group from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_sm_user_access_device(self, request: operations.DeleteNetworkSmUserAccessDeviceRequest) -> operations.DeleteNetworkSmUserAccessDeviceResponse:
        r"""Delete a User Access Device
        Delete a User Access Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmUserAccessDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_access_policy(self, request: operations.DeleteNetworkSwitchAccessPolicyRequest) -> operations.DeleteNetworkSwitchAccessPolicyResponse:
        r"""Delete an access policy for a switch network
        Delete an access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_link_aggregation(self, request: operations.DeleteNetworkSwitchLinkAggregationRequest) -> operations.DeleteNetworkSwitchLinkAggregationResponse:
        r"""Split a link aggregation group into separate ports
        Split a link aggregation group into separate ports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_port_schedule(self, request: operations.DeleteNetworkSwitchPortScheduleRequest) -> operations.DeleteNetworkSwitchPortScheduleResponse:
        r"""Delete a switch port schedule
        Delete a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_qos_rule(self, request: operations.DeleteNetworkSwitchQosRuleRequest) -> operations.DeleteNetworkSwitchQosRuleResponse:
        r"""Delete a quality of service rule
        Delete a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_routing_multicast_rendezvous_point(self, request: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Delete a multicast rendezvous point
        Delete a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack(self, request: operations.DeleteNetworkSwitchStackRequest) -> operations.DeleteNetworkSwitchStackResponse:
        r"""Delete a stack
        Delete a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_interface(self, request: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest) -> operations.DeleteNetworkSwitchStackRoutingInterfaceResponse:
        r"""Delete a layer 3 interface from a switch stack
        Delete a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_static_route(self, request: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) -> operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch stack
        Delete a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_webhooks_http_server(self, request: operations.DeleteNetworkWebhooksHTTPServerRequest) -> operations.DeleteNetworkWebhooksHTTPServerResponse:
        r"""Delete an HTTP server from a network
        Delete an HTTP server from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_wireless_rf_profile(self, request: operations.DeleteNetworkWirelessRfProfileRequest) -> operations.DeleteNetworkWirelessRfProfileResponse:
        r"""Delete a RF Profile
        Delete a RF Profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_wireless_ssid_identity_psk(self, request: operations.DeleteNetworkWirelessSsidIdentityPskRequest) -> operations.DeleteNetworkWirelessSsidIdentityPskResponse:
        r"""Delete an Identity PSK
        Delete an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization(self, request: operations.DeleteOrganizationRequest) -> operations.DeleteOrganizationResponse:
        r"""Delete an organization
        Delete an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_action_batch(self, request: operations.DeleteOrganizationActionBatchRequest) -> operations.DeleteOrganizationActionBatchResponse:
        r"""Delete an action batch
        Delete an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_adaptive_policy_acl(self, request: operations.DeleteOrganizationAdaptivePolicyACLRequest) -> operations.DeleteOrganizationAdaptivePolicyACLResponse:
        r"""Deletes the specified adaptive policy ACL
        Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_admin(self, request: operations.DeleteOrganizationAdminRequest) -> operations.DeleteOrganizationAdminResponse:
        r"""Revoke all access for a dashboard administrator within this organization
        Revoke all access for a dashboard administrator within this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_branding_policy(self, request: operations.DeleteOrganizationBrandingPolicyRequest) -> operations.DeleteOrganizationBrandingPolicyResponse:
        r"""Delete a branding policy
        Delete a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_config_template(self, request: operations.DeleteOrganizationConfigTemplateRequest) -> operations.DeleteOrganizationConfigTemplateResponse:
        r"""Remove a configuration template
        Remove a configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_insight_monitored_media_server(self, request: operations.DeleteOrganizationInsightMonitoredMediaServerRequest) -> operations.DeleteOrganizationInsightMonitoredMediaServerResponse:
        r"""Delete a monitored media server from this organization
        Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_saml_idp(self, request: operations.DeleteOrganizationSamlIdpRequest) -> operations.DeleteOrganizationSamlIdpResponse:
        r"""Remove a SAML IdP in your organization.
        Remove a SAML IdP in your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_saml_role(self, request: operations.DeleteOrganizationSamlRoleRequest) -> operations.DeleteOrganizationSamlRoleResponse:
        r"""Remove a SAML role
        Remove a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_device(self, request: operations.GetDeviceRequest) -> operations.GetDeviceResponse:
        r"""Return a single device
        Return a single device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_200_application_json_object = out

        return res

    
    def get_device_camera_quality_and_retention(self, request: operations.GetDeviceCameraQualityAndRetentionRequest) -> operations.GetDeviceCameraQualityAndRetentionResponse:
        r"""Returns quality and retention settings for the given camera
        Returns quality and retention settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    def get_device_camera_sense(self, request: operations.GetDeviceCameraSenseRequest) -> operations.GetDeviceCameraSenseResponse:
        r"""Returns sense settings for a given camera
        Returns sense settings for a given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_200_application_json_object = out

        return res

    
    def get_device_camera_sense_object_detection_models(self, request: operations.GetDeviceCameraSenseObjectDetectionModelsRequest) -> operations.GetDeviceCameraSenseObjectDetectionModelsResponse:
        r"""Returns the MV Sense object detection model list for the given camera
        Returns the MV Sense object detection model list for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense/objectDetectionModels", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseObjectDetectionModelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_object_detection_models_200_application_json_object = out

        return res

    
    def get_device_camera_video_link(self, request: operations.GetDeviceCameraVideoLinkRequest) -> operations.GetDeviceCameraVideoLinkResponse:
        r"""Returns video link to the specified camera
        Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/videoLink", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_link_200_application_json_object = out

        return res

    
    def get_device_camera_video_settings(self, request: operations.GetDeviceCameraVideoSettingsRequest) -> operations.GetDeviceCameraVideoSettingsResponse:
        r"""Returns video settings for the given camera
        Returns video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_settings_200_application_json_object = out

        return res

    
    def get_device_camera_wireless_profiles(self, request: operations.GetDeviceCameraWirelessProfilesRequest) -> operations.GetDeviceCameraWirelessProfilesResponse:
        r"""Returns wireless profile assigned to the given camera
        Returns wireless profile assigned to the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def get_device_cellular_gateway_lan(self, request: operations.GetDeviceCellularGatewayLanRequest) -> operations.GetDeviceCellularGatewayLanResponse:
        r"""Show the LAN Settings of a MG
        Show the LAN Settings of a MG
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    def get_device_cellular_gateway_port_forwarding_rules(self, request: operations.GetDeviceCellularGatewayPortForwardingRulesRequest) -> operations.GetDeviceCellularGatewayPortForwardingRulesResponse:
        r"""Returns the port forwarding rules for a single MG.
        Returns the port forwarding rules for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

        return res

    
    def get_device_management_interface(self, request: operations.GetDeviceManagementInterfaceRequest) -> operations.GetDeviceManagementInterfaceResponse:
        r"""Return the management interface settings for a device
        Return the management interface settings for a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_management_interface_200_application_json_object = out

        return res

    
    def get_device_switch_port(self, request: operations.GetDeviceSwitchPortRequest) -> operations.GetDeviceSwitchPortResponse:
        r"""Return a switch port
        Return a switch port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_port_200_application_json_object = out

        return res

    
    def get_device_switch_ports(self, request: operations.GetDeviceSwitchPortsRequest) -> operations.GetDeviceSwitchPortsResponse:
        r"""List the switch ports for a switch
        List the switch ports for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_200_application_json_object = out

        return res

    
    def get_device_switch_routing_interface(self, request: operations.GetDeviceSwitchRoutingInterfaceRequest) -> operations.GetDeviceSwitchRoutingInterfaceResponse:
        r"""Return a layer 3 interface for a switch
        Return a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_200_application_json_object = out

        return res

    
    def get_device_switch_routing_interface_dhcp(self, request: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.GetDeviceSwitchRoutingInterfaceDhcpResponse:
        r"""Return a layer 3 interface DHCP configuration for a switch
        Return a layer 3 interface DHCP configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def get_device_switch_routing_interfaces(self, request: operations.GetDeviceSwitchRoutingInterfacesRequest) -> operations.GetDeviceSwitchRoutingInterfacesResponse:
        r"""List layer 3 interfaces for a switch
        List layer 3 interfaces for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interfaces_200_application_json_object = out

        return res

    
    def get_device_switch_routing_static_route(self, request: operations.GetDeviceSwitchRoutingStaticRouteRequest) -> operations.GetDeviceSwitchRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch
        Return a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def get_device_switch_routing_static_routes(self, request: operations.GetDeviceSwitchRoutingStaticRoutesRequest) -> operations.GetDeviceSwitchRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch
        List layer 3 static routes for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_routes_200_application_json_object = out

        return res

    
    def get_device_switch_warm_spare(self, request: operations.GetDeviceSwitchWarmSpareRequest) -> operations.GetDeviceSwitchWarmSpareResponse:
        r"""Return warm spare configuration for a switch
        Return warm spare configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def get_device_wireless_bluetooth_settings(self, request: operations.GetDeviceWirelessBluetoothSettingsRequest) -> operations.GetDeviceWirelessBluetoothSettingsResponse:
        r"""Return the bluetooth settings for a wireless device
        Return the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_device_wireless_radio_settings(self, request: operations.GetDeviceWirelessRadioSettingsRequest) -> operations.GetDeviceWirelessRadioSettingsResponse:
        r"""Return the radio settings of a device
        Return the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def get_network(self, request: operations.GetNetworkRequest) -> operations.GetNetworkResponse:
        r"""Return a network
        Return a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_200_application_json_object = out

        return res

    
    def get_network_alerts_settings(self, request: operations.GetNetworkAlertsSettingsRequest) -> operations.GetNetworkAlertsSettingsResponse:
        r"""Return the alert configuration for this network
        Return the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_alerts_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_connectivity_monitoring_destinations(self, request: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse:
        r"""Return the connectivity testing destinations for an MX network
        Return the connectivity testing destinations for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def get_network_appliance_content_filtering(self, request: operations.GetNetworkApplianceContentFilteringRequest) -> operations.GetNetworkApplianceContentFilteringResponse:
        r"""Return the content filtering settings for an MX network
        Return the content filtering settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    def get_network_appliance_content_filtering_categories(self, request: operations.GetNetworkApplianceContentFilteringCategoriesRequest) -> operations.GetNetworkApplianceContentFilteringCategoriesResponse:
        r"""List all available content filtering categories for an MX network
        List all available content filtering categories for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering/categories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_categories_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_cellular_firewall_rules(self, request: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse:
        r"""Return the cellular firewall rules for an MX network
        Return the cellular firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_firewalled_service(self, request: operations.GetNetworkApplianceFirewallFirewalledServiceRequest) -> operations.GetNetworkApplianceFirewallFirewalledServiceResponse:
        r"""Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_firewalled_services(self, request: operations.GetNetworkApplianceFirewallFirewalledServicesRequest) -> operations.GetNetworkApplianceFirewallFirewalledServicesResponse:
        r"""List the appliance services and their accessibility rules
        List the appliance services and their accessibility rules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_services_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_inbound_firewall_rules(self, request: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse:
        r"""Return the inbound firewall rules for an MX network
        Return the inbound firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l3_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL3FirewallRulesResponse:
        r"""Return the L3 firewall rules for an MX network
        Return the L3 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l7_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesResponse:
        r"""List the MX L7 firewall rules for an MX network
        List the MX L7 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l7_firewall_rules_application_categories(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
        r"""Return the L7 firewall application categories and their associated applications for an MX network
        Return the L7 firewall application categories and their associated applications for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse:
        r"""Return the 1:Many NAT mapping rules for an MX network
        Return the 1:Many NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse:
        r"""Return the 1:1 NAT mapping rules for an MX network
        Return the 1:1 NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_port_forwarding_rules(self, request: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.GetNetworkApplianceFirewallPortForwardingRulesResponse:
        r"""Return the port forwarding rules for an MX network
        Return the port forwarding rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_port(self, request: operations.GetNetworkAppliancePortRequest) -> operations.GetNetworkAppliancePortResponse:
        r"""Return per-port VLAN settings for a single MX port.
        Return per-port VLAN settings for a single MX port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_port_200_application_json_object = out

        return res

    
    def get_network_appliance_ports(self, request: operations.GetNetworkAppliancePortsRequest) -> operations.GetNetworkAppliancePortsResponse:
        r"""List per-port VLAN settings for all ports of a MX.
        List per-port VLAN settings for all ports of a MX.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_ports_200_application_json_object = out

        return res

    
    def get_network_appliance_security_intrusion(self, request: operations.GetNetworkApplianceSecurityIntrusionRequest) -> operations.GetNetworkApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an MX network
        Returns all supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def get_network_appliance_security_malware(self, request: operations.GetNetworkApplianceSecurityMalwareRequest) -> operations.GetNetworkApplianceSecurityMalwareResponse:
        r"""Returns all supported malware settings for an MX network
        Returns all supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_malware_200_application_json_object = out

        return res

    
    def get_network_appliance_settings(self, request: operations.GetNetworkApplianceSettingsRequest) -> operations.GetNetworkApplianceSettingsResponse:
        r"""Return the appliance settings for a network
        Return the appliance settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_single_lan(self, request: operations.GetNetworkApplianceSingleLanRequest) -> operations.GetNetworkApplianceSingleLanResponse:
        r"""Return single LAN configuration
        Return single LAN configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_single_lan_200_application_json_object = out

        return res

    
    def get_network_appliance_static_route(self, request: operations.GetNetworkApplianceStaticRouteRequest) -> operations.GetNetworkApplianceStaticRouteResponse:
        r"""Return a static route for an MX or teleworker network
        Return a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_route_200_application_json_object = out

        return res

    
    def get_network_appliance_static_routes(self, request: operations.GetNetworkApplianceStaticRoutesRequest) -> operations.GetNetworkApplianceStaticRoutesResponse:
        r"""List the static routes for an MX or teleworker network
        List the static routes for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_routes_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping(self, request: operations.GetNetworkApplianceTrafficShapingRequest) -> operations.GetNetworkApplianceTrafficShapingResponse:
        r"""Display the traffic shaping settings for an MX network
        Display the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Return a custom performance class for an MX network
        Return a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_classes(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
        r"""List all custom performance classes for an MX network
        List all custom performance classes for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_rules(self, request: operations.GetNetworkApplianceTrafficShapingRulesRequest) -> operations.GetNetworkApplianceTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings rules for an MX network
        Display the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Returns the uplink bandwidth settings for your MX network.
        Returns the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_selection(self, request: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Show uplink selection settings for an MX network
        Show uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def get_network_appliance_vlan(self, request: operations.GetNetworkApplianceVlanRequest) -> operations.GetNetworkApplianceVlanResponse:
        r"""Return a VLAN
        Return a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlan_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans(self, request: operations.GetNetworkApplianceVlansRequest) -> operations.GetNetworkApplianceVlansResponse:
        r"""List the VLANs for an MX network
        List the VLANs for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans_settings(self, request: operations.GetNetworkApplianceVlansSettingsRequest) -> operations.GetNetworkApplianceVlansSettingsResponse:
        r"""Returns the enabled status of VLANs for the network
        Returns the enabled status of VLANs for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_vpn_bgp(self, request: operations.GetNetworkApplianceVpnBgpRequest) -> operations.GetNetworkApplianceVpnBgpResponse:
        r"""Return a Hub BGP Configuration
        Return a Hub BGP Configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    def get_network_appliance_vpn_site_to_site_vpn(self, request: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.GetNetworkApplianceVpnSiteToSiteVpnResponse:
        r"""Return the site-to-site VPN settings of a network
        Return the site-to-site VPN settings of a network. Only valid for MX networks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    def get_network_appliance_warm_spare(self, request: operations.GetNetworkApplianceWarmSpareRequest) -> operations.GetNetworkApplianceWarmSpareResponse:
        r"""Return MX warm spare settings
        Return MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def get_network_camera_quality_retention_profile(self, request: operations.GetNetworkCameraQualityRetentionProfileRequest) -> operations.GetNetworkCameraQualityRetentionProfileResponse:
        r"""Retrieve a single quality retention profile
        Retrieve a single quality retention profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def get_network_camera_quality_retention_profiles(self, request: operations.GetNetworkCameraQualityRetentionProfilesRequest) -> operations.GetNetworkCameraQualityRetentionProfilesResponse:
        r"""List the quality retention profiles for this network
        List the quality retention profiles for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profiles_200_application_json_object = out

        return res

    
    def get_network_camera_schedules(self, request: operations.GetNetworkCameraSchedulesRequest) -> operations.GetNetworkCameraSchedulesResponse:
        r"""Returns a list of all camera recording schedules.
        Returns a list of all camera recording schedules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_schedules_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profile(self, request: operations.GetNetworkCameraWirelessProfileRequest) -> operations.GetNetworkCameraWirelessProfileResponse:
        r"""Retrieve a single camera wireless profile.
        Retrieve a single camera wireless profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profiles(self, request: operations.GetNetworkCameraWirelessProfilesRequest) -> operations.GetNetworkCameraWirelessProfilesResponse:
        r"""List the camera wireless profiles for this network.
        List the camera wireless profiles for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        r"""Return the connectivity testing destinations for an MG network
        Return the connectivity testing destinations for an MG network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_dhcp(self, request: operations.GetNetworkCellularGatewayDhcpRequest) -> operations.GetNetworkCellularGatewayDhcpResponse:
        r"""List common DHCP settings of MGs
        List common DHCP settings of MGs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_subnet_pool(self, request: operations.GetNetworkCellularGatewaySubnetPoolRequest) -> operations.GetNetworkCellularGatewaySubnetPoolResponse:
        r"""Return the subnet pool and mask configured for MGs in the network.
        Return the subnet pool and mask configured for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_uplink(self, request: operations.GetNetworkCellularGatewayUplinkRequest) -> operations.GetNetworkCellularGatewayUplinkResponse:
        r"""Returns the uplink settings for your MG network.
        Returns the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    def get_network_client_policy(self, request: operations.GetNetworkClientPolicyRequest) -> operations.GetNetworkClientPolicyResponse:
        r"""Return the policy assigned to a client on the network
        Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_policy_200_application_json_object = out

        return res

    
    def get_network_client_splash_authorization_status(self, request: operations.GetNetworkClientSplashAuthorizationStatusRequest) -> operations.GetNetworkClientSplashAuthorizationStatusResponse:
        r"""Return the splash authorization for a client, for each SSID they've associated with through splash
        Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def get_network_devices(self, request: operations.GetNetworkDevicesRequest) -> operations.GetNetworkDevicesResponse:
        r"""List the devices in a network
        List the devices in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_devices_200_application_json_object = out

        return res

    
    def get_network_firmware_upgrades(self, request: operations.GetNetworkFirmwareUpgradesRequest) -> operations.GetNetworkFirmwareUpgradesResponse:
        r"""Get firmware upgrade information for a network
        Get firmware upgrade information for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_firmware_upgrades_200_application_json_object = out

        return res

    
    def get_network_floor_plan(self, request: operations.GetNetworkFloorPlanRequest) -> operations.GetNetworkFloorPlanResponse:
        r"""Find a floor plan by ID
        Find a floor plan by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plan_200_application_json_object = out

        return res

    
    def get_network_floor_plans(self, request: operations.GetNetworkFloorPlansRequest) -> operations.GetNetworkFloorPlansResponse:
        r"""List the floor plans that belong to your network
        List the floor plans that belong to your network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plans_200_application_json_object = out

        return res

    
    def get_network_group_policies(self, request: operations.GetNetworkGroupPoliciesRequest) -> operations.GetNetworkGroupPoliciesResponse:
        r"""List the group policies in a network
        List the group policies in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policies_200_application_json_object = out

        return res

    
    def get_network_group_policy(self, request: operations.GetNetworkGroupPolicyRequest) -> operations.GetNetworkGroupPolicyResponse:
        r"""Display a group policy
        Display a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policy_200_application_json_object = out

        return res

    
    def get_network_meraki_auth_user(self, request: operations.GetNetworkMerakiAuthUserRequest) -> operations.GetNetworkMerakiAuthUserResponse:
        r"""Return the Meraki Auth splash guest, RADIUS, or client VPN user
        Return the Meraki Auth splash guest, RADIUS, or client VPN user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_user_200_application_json_object = out

        return res

    
    def get_network_meraki_auth_users(self, request: operations.GetNetworkMerakiAuthUsersRequest) -> operations.GetNetworkMerakiAuthUsersResponse:
        r"""List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_users_200_application_json_object = out

        return res

    
    def get_network_mqtt_broker(self, request: operations.GetNetworkMqttBrokerRequest) -> operations.GetNetworkMqttBrokerResponse:
        r"""Return an MQTT broker
        Return an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_broker_200_application_json_object = out

        return res

    
    def get_network_mqtt_brokers(self, request: operations.GetNetworkMqttBrokersRequest) -> operations.GetNetworkMqttBrokersResponse:
        r"""List the MQTT brokers for this network
        List the MQTT brokers for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_brokers_200_application_json_object = out

        return res

    
    def get_network_netflow(self, request: operations.GetNetworkNetflowRequest) -> operations.GetNetworkNetflowResponse:
        r"""Return the NetFlow traffic reporting settings for a network
        Return the NetFlow traffic reporting settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_netflow_200_application_json_object = out

        return res

    
    def get_network_pii_pii_keys(self, request: operations.GetNetworkPiiPiiKeysRequest) -> operations.GetNetworkPiiPiiKeysResponse:
        r"""List the keys required to access Personally Identifiable Information (PII) for a given identifier
        List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/piiKeys
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/piiKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiPiiKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_pii_keys_200_application_json_object = out

        return res

    
    def get_network_pii_request(self, request: operations.GetNetworkPiiRequestRequest) -> operations.GetNetworkPiiRequestResponse:
        r"""Return a PII request
        Return a PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_request_200_application_json_object = out

        return res

    
    def get_network_pii_requests(self, request: operations.GetNetworkPiiRequestsRequest) -> operations.GetNetworkPiiRequestsResponse:
        r"""List the PII requests for this network or organization
        List the PII requests for this network or organization
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_requests_200_application_json_object = out

        return res

    
    def get_network_pii_sm_devices_for_key(self, request: operations.GetNetworkPiiSmDevicesForKeyRequest) -> operations.GetNetworkPiiSmDevicesForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smDevicesForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smDevicesForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmDevicesForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_devices_for_key_200_application_json_object = out

        return res

    
    def get_network_pii_sm_owners_for_key(self, request: operations.GetNetworkPiiSmOwnersForKeyRequest) -> operations.GetNetworkPiiSmOwnersForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smOwnersForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smOwnersForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmOwnersForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_owners_for_key_200_application_json_object = out

        return res

    
    def get_network_settings(self, request: operations.GetNetworkSettingsRequest) -> operations.GetNetworkSettingsResponse:
        r"""Return the settings for a network
        Return the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_settings_200_application_json_object = out

        return res

    
    def get_network_sm_bypass_activation_lock_attempt(self, request: operations.GetNetworkSmBypassActivationLockAttemptRequest) -> operations.GetNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt status
        Bypass activation lock attempt status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_bypass_activation_lock_attempt_200_application_json_object = out

        return res

    
    def get_network_sm_device_certs(self, request: operations.GetNetworkSmDeviceCertsRequest) -> operations.GetNetworkSmDeviceCertsResponse:
        r"""List the certs on a device
        List the certs on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/certs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_certs_200_application_json_object = out

        return res

    
    def get_network_sm_device_device_profiles(self, request: operations.GetNetworkSmDeviceDeviceProfilesRequest) -> operations.GetNetworkSmDeviceDeviceProfilesResponse:
        r"""Get the profiles associated with a device
        Get the profiles associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_device_network_adapters(self, request: operations.GetNetworkSmDeviceNetworkAdaptersRequest) -> operations.GetNetworkSmDeviceNetworkAdaptersResponse:
        r"""List the network adapters of a device
        List the network adapters of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/networkAdapters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceNetworkAdaptersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_network_adapters_200_application_json_object = out

        return res

    
    def get_network_sm_device_restrictions(self, request: operations.GetNetworkSmDeviceRestrictionsRequest) -> operations.GetNetworkSmDeviceRestrictionsResponse:
        r"""List the restrictions on a device
        List the restrictions on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/restrictions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_restrictions_200_application_json_object = out

        return res

    
    def get_network_sm_device_security_centers(self, request: operations.GetNetworkSmDeviceSecurityCentersRequest) -> operations.GetNetworkSmDeviceSecurityCentersResponse:
        r"""List the security centers on a device
        List the security centers on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/securityCenters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSecurityCentersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_security_centers_200_application_json_object = out

        return res

    
    def get_network_sm_device_softwares(self, request: operations.GetNetworkSmDeviceSoftwaresRequest) -> operations.GetNetworkSmDeviceSoftwaresResponse:
        r"""Get a list of softwares associated with a device
        Get a list of softwares associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/softwares", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_softwares_200_application_json_object = out

        return res

    
    def get_network_sm_device_wlan_lists(self, request: operations.GetNetworkSmDeviceWlanListsRequest) -> operations.GetNetworkSmDeviceWlanListsResponse:
        r"""List the saved SSID names on a device
        List the saved SSID names on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/wlanLists", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceWlanListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_wlan_lists_200_application_json_object = out

        return res

    
    def get_network_sm_devices(self, request: operations.GetNetworkSmDevicesRequest) -> operations.GetNetworkSmDevicesResponse:
        r"""List the devices enrolled in an SM network with various specified fields and filters
        List the devices enrolled in an SM network with various specified fields and filters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""List all profiles in a network
        List all profiles in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/profiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_target_group(self, request: operations.GetNetworkSmTargetGroupRequest) -> operations.GetNetworkSmTargetGroupResponse:
        r"""Return a target group
        Return a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_group_200_application_json_object = out

        return res

    
    def get_network_sm_target_groups(self, request: operations.GetNetworkSmTargetGroupsRequest) -> operations.GetNetworkSmTargetGroupsResponse:
        r"""List the target groups in this network
        List the target groups in this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_groups_200_application_json_object = out

        return res

    
    def get_network_sm_user_access_devices(self, request: operations.GetNetworkSmUserAccessDevicesRequest) -> operations.GetNetworkSmUserAccessDevicesResponse:
        r"""List User Access Devices and its Trusted Access Connections
        List User Access Devices and its Trusted Access Connections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Get the profiles associated with a user
        Get the profiles associated with a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/deviceProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_device_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_user_softwares(self, request: operations.GetNetworkSmUserSoftwaresRequest) -> operations.GetNetworkSmUserSoftwaresResponse:
        r"""Get a list of softwares associated with a user
        Get a list of softwares associated with a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/softwares", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_softwares_200_application_json_object = out

        return res

    
    def get_network_sm_users(self, request: operations.GetNetworkSmUsersRequest) -> operations.GetNetworkSmUsersResponse:
        r"""List the owners in an SM network with various specified fields and filters
        List the owners in an SM network with various specified fields and filters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_users_200_application_json_object = out

        return res

    
    def get_network_snmp(self, request: operations.GetNetworkSnmpRequest) -> operations.GetNetworkSnmpResponse:
        r"""Return the SNMP settings for a network
        Return the SNMP settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_snmp_200_application_json_object = out

        return res

    
    def get_network_switch_access_control_lists(self, request: operations.GetNetworkSwitchAccessControlListsRequest) -> operations.GetNetworkSwitchAccessControlListsResponse:
        r"""Return the access control lists for a MS network
        Return the access control lists for a MS network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    def get_network_switch_access_policies(self, request: operations.GetNetworkSwitchAccessPoliciesRequest) -> operations.GetNetworkSwitchAccessPoliciesResponse:
        r"""List the access policies for a switch network
        List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policies_200_application_json_object = out

        return res

    
    def get_network_switch_access_policy(self, request: operations.GetNetworkSwitchAccessPolicyRequest) -> operations.GetNetworkSwitchAccessPolicyResponse:
        r"""Return a specific access policy for a switch network
        Return a specific access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policy_200_application_json_object = out

        return res

    
    def get_network_switch_alternate_management_interface(self, request: operations.GetNetworkSwitchAlternateManagementInterfaceRequest) -> operations.GetNetworkSwitchAlternateManagementInterfaceResponse:
        r"""Return the switch alternate management interface for the network
        Return the switch alternate management interface for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    def get_network_switch_dhcp_server_policy(self, request: operations.GetNetworkSwitchDhcpServerPolicyRequest) -> operations.GetNetworkSwitchDhcpServerPolicyResponse:
        r"""Return the DHCP server policy
        Return the DHCP server policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    def get_network_switch_dscp_to_cos_mappings(self, request: operations.GetNetworkSwitchDscpToCosMappingsRequest) -> operations.GetNetworkSwitchDscpToCosMappingsResponse:
        r"""Return the DSCP to CoS mappings
        Return the DSCP to CoS mappings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    def get_network_switch_link_aggregations(self, request: operations.GetNetworkSwitchLinkAggregationsRequest) -> operations.GetNetworkSwitchLinkAggregationsResponse:
        r"""List link aggregation groups
        List link aggregation groups
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchLinkAggregationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_link_aggregations_200_application_json_object = out

        return res

    
    def get_network_switch_mtu(self, request: operations.GetNetworkSwitchMtuRequest) -> operations.GetNetworkSwitchMtuResponse:
        r"""Return the MTU configuration
        Return the MTU configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_mtu_200_application_json_object = out

        return res

    
    def get_network_switch_port_schedules(self, request: operations.GetNetworkSwitchPortSchedulesRequest) -> operations.GetNetworkSwitchPortSchedulesResponse:
        r"""List switch port schedules
        List switch port schedules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchPortSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_port_schedules_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rule(self, request: operations.GetNetworkSwitchQosRuleRequest) -> operations.GetNetworkSwitchQosRuleResponse:
        r"""Return a quality of service rule
        Return a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rule_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rules(self, request: operations.GetNetworkSwitchQosRulesRequest) -> operations.GetNetworkSwitchQosRulesResponse:
        r"""List quality of service rules
        List quality of service rules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rules_order(self, request: operations.GetNetworkSwitchQosRulesOrderRequest) -> operations.GetNetworkSwitchQosRulesOrderResponse:
        r"""Return the quality of service rule IDs by order in which they will be processed by the switch
        Return the quality of service rule IDs by order in which they will be processed by the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_order_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast(self, request: operations.GetNetworkSwitchRoutingMulticastRequest) -> operations.GetNetworkSwitchRoutingMulticastResponse:
        r"""Return multicast settings for a network
        Return multicast settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast_rendezvous_point(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Return a multicast rendezvous point
        Return a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast_rendezvous_points(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
        r"""List multicast rendezvous points
        List multicast rendezvous points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_points_200_application_json_object = out

        return res

    
    def get_network_switch_routing_ospf(self, request: operations.GetNetworkSwitchRoutingOspfRequest) -> operations.GetNetworkSwitchRoutingOspfResponse:
        r"""Return layer 3 OSPF routing configuration
        Return layer 3 OSPF routing configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    def get_network_switch_settings(self, request: operations.GetNetworkSwitchSettingsRequest) -> operations.GetNetworkSwitchSettingsResponse:
        r"""Returns the switch network settings
        Returns the switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_settings_200_application_json_object = out

        return res

    
    def get_network_switch_stack(self, request: operations.GetNetworkSwitchStackRequest) -> operations.GetNetworkSwitchStackResponse:
        r"""Show a switch stack
        Show a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface(self, request: operations.GetNetworkSwitchStackRoutingInterfaceRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceResponse:
        r"""Return a layer 3 interface from a switch stack
        Return a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface_dhcp(self, request: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Return a layer 3 interface DHCP configuration for a switch stack
        Return a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interfaces(self, request: operations.GetNetworkSwitchStackRoutingInterfacesRequest) -> operations.GetNetworkSwitchStackRoutingInterfacesResponse:
        r"""List layer 3 interfaces for a switch stack
        List layer 3 interfaces for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interfaces_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_route(self, request: operations.GetNetworkSwitchStackRoutingStaticRouteRequest) -> operations.GetNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch stack
        Return a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_routes(self, request: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) -> operations.GetNetworkSwitchStackRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch stack
        List layer 3 static routes for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_routes_200_application_json_object = out

        return res

    
    def get_network_switch_stacks(self, request: operations.GetNetworkSwitchStacksRequest) -> operations.GetNetworkSwitchStacksResponse:
        r"""List the switch stacks in a network
        List the switch stacks in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStacksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stacks_200_application_json_object = out

        return res

    
    def get_network_switch_storm_control(self, request: operations.GetNetworkSwitchStormControlRequest) -> operations.GetNetworkSwitchStormControlResponse:
        r"""Return the storm control configuration for a switch network
        Return the storm control configuration for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_storm_control_200_application_json_object = out

        return res

    
    def get_network_switch_stp(self, request: operations.GetNetworkSwitchStpRequest) -> operations.GetNetworkSwitchStpResponse:
        r"""Returns STP settings
        Returns STP settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stp_200_application_json_object = out

        return res

    
    def get_network_syslog_servers(self, request: operations.GetNetworkSyslogServersRequest) -> operations.GetNetworkSyslogServersResponse:
        r"""List the syslog servers for a network
        List the syslog servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_syslog_servers_200_application_json_object = out

        return res

    
    def get_network_traffic_analysis(self, request: operations.GetNetworkTrafficAnalysisRequest) -> operations.GetNetworkTrafficAnalysisResponse:
        r"""Return the traffic analysis settings for a network
        Return the traffic analysis settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_analysis_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_application_categories(self, request: operations.GetNetworkTrafficShapingApplicationCategoriesRequest) -> operations.GetNetworkTrafficShapingApplicationCategoriesResponse:
        r"""Returns the application categories for traffic shaping rules.
        Returns the application categories for traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/applicationCategories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_application_categories_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_dscp_tagging_options(self, request: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest) -> operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse:
        r"""Returns the available DSCP tagging options for your traffic shaping rules.
        Returns the available DSCP tagging options for your traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/dscpTaggingOptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_dscp_tagging_options_200_application_json_object = out

        return res

    
    def get_network_webhooks_http_server(self, request: operations.GetNetworkWebhooksHTTPServerRequest) -> operations.GetNetworkWebhooksHTTPServerResponse:
        r"""Return an HTTP server for a network
        Return an HTTP server for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_server_200_application_json_object = out

        return res

    
    def get_network_webhooks_http_servers(self, request: operations.GetNetworkWebhooksHTTPServersRequest) -> operations.GetNetworkWebhooksHTTPServersResponse:
        r"""List the HTTP servers for a network
        List the HTTP servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_servers_200_application_json_object = out

        return res

    
    def get_network_webhooks_webhook_test(self, request: operations.GetNetworkWebhooksWebhookTestRequest) -> operations.GetNetworkWebhooksWebhookTestResponse:
        r"""Return the status of a webhook test for a network
        Return the status of a webhook test for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests/{webhookTestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_webhook_test_200_application_json_object = out

        return res

    
    def get_network_wireless_alternate_management_interface(self, request: operations.GetNetworkWirelessAlternateManagementInterfaceRequest) -> operations.GetNetworkWirelessAlternateManagementInterfaceResponse:
        r"""Return alternate management interface and devices with IP assigned
        Return alternate management interface and devices with IP assigned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    def get_network_wireless_billing(self, request: operations.GetNetworkWirelessBillingRequest) -> operations.GetNetworkWirelessBillingResponse:
        r"""Return the billing settings of this network
        Return the billing settings of this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_billing_200_application_json_object = out

        return res

    
    def get_network_wireless_bluetooth_settings(self, request: operations.GetNetworkWirelessBluetoothSettingsRequest) -> operations.GetNetworkWirelessBluetoothSettingsResponse:
        r"""Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_rf_profile(self, request: operations.GetNetworkWirelessRfProfileRequest) -> operations.GetNetworkWirelessRfProfileResponse:
        r"""Return a RF profile
        Return a RF profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    def get_network_wireless_rf_profiles(self, request: operations.GetNetworkWirelessRfProfilesRequest) -> operations.GetNetworkWirelessRfProfilesResponse:
        r"""List the non-basic RF profiles for this network
        List the non-basic RF profiles for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profiles_200_application_json_object = out

        return res

    
    def get_network_wireless_settings(self, request: operations.GetNetworkWirelessSettingsRequest) -> operations.GetNetworkWirelessSettingsResponse:
        r"""Return the wireless settings for a network
        Return the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid(self, request: operations.GetNetworkWirelessSsidRequest) -> operations.GetNetworkWirelessSsidResponse:
        r"""Return a single MR SSID
        Return a single MR SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_bonjour_forwarding(self, request: operations.GetNetworkWirelessSsidBonjourForwardingRequest) -> operations.GetNetworkWirelessSsidBonjourForwardingResponse:
        r"""List the Bonjour forwarding setting and rules for the SSID
        List the Bonjour forwarding setting and rules for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_device_type_group_policies(self, request: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""List the device type group policies for the SSID
        List the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_eap_override(self, request: operations.GetNetworkWirelessSsidEapOverrideRequest) -> operations.GetNetworkWirelessSsidEapOverrideResponse:
        r"""Return the EAP overridden parameters for an SSID
        Return the EAP overridden parameters for an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        r"""Return the L3 firewall rules for an SSID on an MR network
        Return the L3 firewall rules for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        r"""Return the L7 firewall rules for an SSID on an MR network
        Return the L7 firewall rules for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_hotspot20(self, request: operations.GetNetworkWirelessSsidHotspot20Request) -> operations.GetNetworkWirelessSsidHotspot20Response:
        r"""Return the Hotspot 2.0 settings for an SSID
        Return the Hotspot 2.0 settings for an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_identity_psk(self, request: operations.GetNetworkWirelessSsidIdentityPskRequest) -> operations.GetNetworkWirelessSsidIdentityPskResponse:
        r"""Return an Identity PSK
        Return an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_identity_psks(self, request: operations.GetNetworkWirelessSsidIdentityPsksRequest) -> operations.GetNetworkWirelessSsidIdentityPsksResponse:
        r"""List all Identity PSKs in a wireless network
        List all Identity PSKs in a wireless network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPsksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psks_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_schedules(self, request: operations.GetNetworkWirelessSsidSchedulesRequest) -> operations.GetNetworkWirelessSsidSchedulesResponse:
        r"""List the outage schedule for the SSID
        List the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_splash_settings(self, request: operations.GetNetworkWirelessSsidSplashSettingsRequest) -> operations.GetNetworkWirelessSsidSplashSettingsResponse:
        r"""Display the splash page settings for the given SSID
        Display the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_traffic_shaping_rules(self, request: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.GetNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings for a SSID on an MR network
        Display the traffic shaping settings for a SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_vpn(self, request: operations.GetNetworkWirelessSsidVpnRequest) -> operations.GetNetworkWirelessSsidVpnResponse:
        r"""List the VPN settings for the SSID.
        List the VPN settings for the SSID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    
    def get_network_wireless_ssids(self, request: operations.GetNetworkWirelessSsidsRequest) -> operations.GetNetworkWirelessSsidsResponse:
        r"""List the MR SSIDs in a network
        List the MR SSIDs in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssids_200_application_json_object = out

        return res

    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        r"""Return an organization
        Return an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_200_application_json_object = out

        return res

    
    def get_organization_action_batch(self, request: operations.GetOrganizationActionBatchRequest) -> operations.GetOrganizationActionBatchResponse:
        r"""Return an action batch
        Return an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batch_200_application_json_object = out

        return res

    
    def get_organization_action_batches(self, request: operations.GetOrganizationActionBatchesRequest) -> operations.GetOrganizationActionBatchesResponse:
        r"""Return the list of action batches in the organization
        Return the list of action batches in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batches_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_acl(self, request: operations.GetOrganizationAdaptivePolicyACLRequest) -> operations.GetOrganizationAdaptivePolicyACLResponse:
        r"""Returns the adaptive policy ACL information
        Returns the adaptive policy ACL information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_acls(self, request: operations.GetOrganizationAdaptivePolicyAclsRequest) -> operations.GetOrganizationAdaptivePolicyAclsResponse:
        r"""List adaptive policy ACLs in a organization
        List adaptive policy ACLs in a organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyAclsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acls_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_settings(self, request: operations.GetOrganizationAdaptivePolicySettingsRequest) -> operations.GetOrganizationAdaptivePolicySettingsResponse:
        r"""Returns global adaptive policy settings in an organization
        Returns global adaptive policy settings in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    def get_organization_admins(self, request: operations.GetOrganizationAdminsRequest) -> operations.GetOrganizationAdminsResponse:
        r"""List the dashboard administrators in this organization
        List the dashboard administrators in this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdminsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_admins_200_application_json_object = out

        return res

    
    def get_organization_appliance_security_intrusion(self, request: operations.GetOrganizationApplianceSecurityIntrusionRequest) -> operations.GetOrganizationApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an organization
        Returns all supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        r"""Return the third party VPN peers for an organization
        Return the third party VPN peers for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse:
        r"""Return the firewall rules for an organization's site-to-site VPN
        Return the firewall rules for an organization's site-to-site VPN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    
    def get_organization_branding_policies(self, request: operations.GetOrganizationBrandingPoliciesRequest) -> operations.GetOrganizationBrandingPoliciesResponse:
        r"""List the branding policies of an organization
        List the branding policies of an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_200_application_json_object = out

        return res

    
    def get_organization_branding_policies_priorities(self, request: operations.GetOrganizationBrandingPoliciesPrioritiesRequest) -> operations.GetOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Return the branding policy IDs of an organization in priority order
        Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def get_organization_branding_policy(self, request: operations.GetOrganizationBrandingPolicyRequest) -> operations.GetOrganizationBrandingPolicyResponse:
        r"""Return a branding policy
        Return a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policy_200_application_json_object = out

        return res

    
    def get_organization_camera_onboarding_statuses(self, request: operations.GetOrganizationCameraOnboardingStatusesRequest) -> operations.GetOrganizationCameraOnboardingStatusesResponse:
        r"""Fetch onboarding status of cameras
        Fetch onboarding status of cameras
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    
    def get_organization_config_template(self, request: operations.GetOrganizationConfigTemplateRequest) -> operations.GetOrganizationConfigTemplateResponse:
        r"""Return a single configuration template
        Return a single configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_port(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Return a switch profile port
        Return a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_ports(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse:
        r"""Return all the ports of a switch profile
        Return all the ports of a switch profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_ports_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profiles(self, request: operations.GetOrganizationConfigTemplateSwitchProfilesRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilesResponse:
        r"""List the switch profiles for your switch template configuration
        List the switch profiles for your switch template configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profiles_200_application_json_object = out

        return res

    
    def get_organization_config_templates(self, request: operations.GetOrganizationConfigTemplatesRequest) -> operations.GetOrganizationConfigTemplatesResponse:
        r"""List the configuration templates for this organization
        List the configuration templates for this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_templates_200_application_json_object = out

        return res

    
    def get_organization_devices(self, request: operations.GetOrganizationDevicesRequest) -> operations.GetOrganizationDevicesResponse:
        r"""List the devices in an organization
        List the devices in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_200_application_json_object = out

        return res

    
    def get_organization_insight_applications(self, request: operations.GetOrganizationInsightApplicationsRequest) -> operations.GetOrganizationInsightApplicationsResponse:
        r"""List all Insight tracked applications
        List all Insight tracked applications
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/applications", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_applications_200_application_json_object = out

        return res

    
    def get_organization_insight_monitored_media_server(self, request: operations.GetOrganizationInsightMonitoredMediaServerRequest) -> operations.GetOrganizationInsightMonitoredMediaServerResponse:
        r"""Return a monitored media server for this organization
        Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_monitored_media_server_200_application_json_object = out

        return res

    
    def get_organization_insight_monitored_media_servers(self, request: operations.GetOrganizationInsightMonitoredMediaServersRequest) -> operations.GetOrganizationInsightMonitoredMediaServersResponse:
        r"""List the monitored media servers for this organization
        List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInsightMonitoredMediaServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_insight_monitored_media_servers_200_application_json_object = out

        return res

    
    def get_organization_inventory_device(self, request: operations.GetOrganizationInventoryDeviceRequest) -> operations.GetOrganizationInventoryDeviceResponse:
        r"""Return a single device from the inventory of an organization
        Return a single device from the inventory of an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices/{serial}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInventoryDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_inventory_device_200_application_json_object = out

        return res

    
    def get_organization_inventory_devices(self, request: operations.GetOrganizationInventoryDevicesRequest) -> operations.GetOrganizationInventoryDevicesResponse:
        r"""Return the device inventory for an organization
        Return the device inventory for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Display a license
        Display a license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_license_200_application_json_object = out

        return res

    
    def get_organization_licenses(self, request: operations.GetOrganizationLicensesRequest) -> operations.GetOrganizationLicensesResponse:
        r"""List the licenses for an organization
        List the licenses for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_200_application_json_object = out

        return res

    
    def get_organization_login_security(self, request: operations.GetOrganizationLoginSecurityRequest) -> operations.GetOrganizationLoginSecurityResponse:
        r"""Returns the login security settings for an organization.
        Returns the login security settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_login_security_200_application_json_object = out

        return res

    
    def get_organization_networks(self, request: operations.GetOrganizationNetworksRequest) -> operations.GetOrganizationNetworksResponse:
        r"""List the networks that the user has privileges on in an organization
        List the networks that the user has privileges on in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_networks_200_application_json_object = out

        return res

    
    def get_organization_saml(self, request: operations.GetOrganizationSamlRequest) -> operations.GetOrganizationSamlResponse:
        r"""Returns the SAML SSO enabled settings for an organization.
        Returns the SAML SSO enabled settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_200_application_json_object = out

        return res

    
    def get_organization_saml_idp(self, request: operations.GetOrganizationSamlIdpRequest) -> operations.GetOrganizationSamlIdpResponse:
        r"""Get a SAML IdP from your organization.
        Get a SAML IdP from your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idp_200_application_json_object = out

        return res

    
    def get_organization_saml_idps(self, request: operations.GetOrganizationSamlIdpsRequest) -> operations.GetOrganizationSamlIdpsResponse:
        r"""List the SAML IdPs in your organization.
        List the SAML IdPs in your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idps_200_application_json_object = out

        return res

    
    def get_organization_saml_role(self, request: operations.GetOrganizationSamlRoleRequest) -> operations.GetOrganizationSamlRoleResponse:
        r"""Return a SAML role
        Return a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_role_200_application_json_object = out

        return res

    
    def get_organization_saml_roles(self, request: operations.GetOrganizationSamlRolesRequest) -> operations.GetOrganizationSamlRolesResponse:
        r"""List the SAML roles for this organization
        List the SAML roles for this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_roles_200_application_json_object = out

        return res

    
    def get_organization_sm_apns_cert(self, request: operations.GetOrganizationSmApnsCertRequest) -> operations.GetOrganizationSmApnsCertResponse:
        r"""Get the organization's APNS certificate
        Get the organization's APNS certificate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/apnsCert", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmApnsCertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_apns_cert_200_application_json_object = out

        return res

    
    def get_organization_sm_vpp_account(self, request: operations.GetOrganizationSmVppAccountRequest) -> operations.GetOrganizationSmVppAccountResponse:
        r"""Get a hash containing the unparsed token of the VPP account with the given ID
        Get a hash containing the unparsed token of the VPP account with the given ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts/{vppAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_account_200_application_json_object = out

        return res

    
    def get_organization_sm_vpp_accounts(self, request: operations.GetOrganizationSmVppAccountsRequest) -> operations.GetOrganizationSmVppAccountsResponse:
        r"""List the VPP accounts in the organization
        List the VPP accounts in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_accounts_200_application_json_object = out

        return res

    
    def get_organization_snmp(self, request: operations.GetOrganizationSnmpRequest) -> operations.GetOrganizationSnmpResponse:
        r"""Return the SNMP settings for an organization
        Return the SNMP settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_snmp_200_application_json_object = out

        return res

    
    def get_organizations(self) -> operations.GetOrganizationsResponse:
        r"""List the organizations that the user has privileges on
        List the organizations that the user has privileges on
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organizations_200_application_json_object = out

        return res

    
    def lock_network_sm_devices(self, request: operations.LockNetworkSmDevicesRequest) -> operations.LockNetworkSmDevicesResponse:
        r"""Lock a set of devices
        Lock a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/lock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LockNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.lock_network_sm_devices_200_application_json_object = out

        return res

    
    def modify_network_sm_devices_tags(self, request: operations.ModifyNetworkSmDevicesTagsRequest) -> operations.ModifyNetworkSmDevicesTagsResponse:
        r"""Add, delete, or update the tags of a set of devices
        Add, delete, or update the tags of a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/modifyTags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyNetworkSmDevicesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_network_sm_devices_tags_200_application_json_object = out

        return res

    
    def move_network_sm_devices(self, request: operations.MoveNetworkSmDevicesRequest) -> operations.MoveNetworkSmDevicesResponse:
        r"""Move a set of devices to a new network
        Move a set of devices to a new network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_network_sm_devices_200_application_json_object = out

        return res

    
    def move_organization_licenses(self, request: operations.MoveOrganizationLicensesRequest) -> operations.MoveOrganizationLicensesResponse:
        r"""Move licenses to another organization
        Move licenses to another organization. This will also move any devices that the licenses are assigned to
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_200_application_json_object = out

        return res

    
    def move_organization_licenses_seats(self, request: operations.MoveOrganizationLicensesSeatsRequest) -> operations.MoveOrganizationLicensesSeatsResponse:
        r"""Move SM seats to another organization
        Move SM seats to another organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/moveSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_seats_200_application_json_object = out

        return res

    
    def provision_network_clients(self, request: operations.ProvisionNetworkClientsRequest) -> operations.ProvisionNetworkClientsResponse:
        r"""Provisions a client with a name and policy
        Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/provision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvisionNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.provision_network_clients_201_application_json_object = out

        return res

    
    def refresh_network_sm_device_details(self, request: operations.RefreshNetworkSmDeviceDetailsRequest) -> operations.RefreshNetworkSmDeviceDetailsResponse:
        r"""Refresh the details of a device
        Refresh the details of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/refreshDetails", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshNetworkSmDeviceDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def remove_network_devices(self, request: operations.RemoveNetworkDevicesRequest) -> operations.RemoveNetworkDevicesResponse:
        r"""Remove a single device
        Remove a single device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def remove_network_switch_stack(self, request: operations.RemoveNetworkSwitchStackRequest) -> operations.RemoveNetworkSwitchStackResponse:
        r"""Remove a switch from a stack
        Remove a switch from a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.remove_network_switch_stack_200_application_json_object = out

        return res

    
    def renew_organization_licenses_seats(self, request: operations.RenewOrganizationLicensesSeatsRequest) -> operations.RenewOrganizationLicensesSeatsResponse:
        r"""Renew SM seats of a license
        Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/renewSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RenewOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.renew_organization_licenses_seats_200_application_json_object = out

        return res

    
    def split_network(self, request: operations.SplitNetworkRequest) -> operations.SplitNetworkResponse:
        r"""Split a combined network into individual networks for each type of device
        Split a combined network into individual networks for each type of device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/split", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SplitNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.split_network_200_application_json_object = out

        return res

    
    def swap_network_appliance_warm_spare(self, request: operations.SwapNetworkApplianceWarmSpareRequest) -> operations.SwapNetworkApplianceWarmSpareResponse:
        r"""Swap MX primary and warm spare appliances
        Swap MX primary and warm spare appliances
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare/swap", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SwapNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.swap_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def unbind_network(self, request: operations.UnbindNetworkRequest) -> operations.UnbindNetworkResponse:
        r"""Unbind a network from a template.
        Unbind a network from a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/unbind", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnbindNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unbind_network_200_application_json_object = out

        return res

    
    def unenroll_network_sm_device(self, request: operations.UnenrollNetworkSmDeviceRequest) -> operations.UnenrollNetworkSmDeviceResponse:
        r"""Unenroll a device
        Unenroll a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/unenroll", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnenrollNetworkSmDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unenroll_network_sm_device_200_application_json_object = out

        return res

    
    def update_device(self, request: operations.UpdateDeviceRequest) -> operations.UpdateDeviceResponse:
        r"""Update the attributes of a device
        Update the attributes of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_200_application_json_object = out

        return res

    
    def update_device_camera_quality_and_retention(self, request: operations.UpdateDeviceCameraQualityAndRetentionRequest) -> operations.UpdateDeviceCameraQualityAndRetentionResponse:
        r"""Update quality and retention settings for the given camera
        Update quality and retention settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    def update_device_camera_sense(self, request: operations.UpdateDeviceCameraSenseRequest) -> operations.UpdateDeviceCameraSenseResponse:
        r"""Update sense settings for the given camera
        Update sense settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_sense_200_application_json_object = out

        return res

    
    def update_device_camera_video_settings(self, request: operations.UpdateDeviceCameraVideoSettingsRequest) -> operations.UpdateDeviceCameraVideoSettingsResponse:
        r"""Update video settings for the given camera
        Update video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_video_settings_200_application_json_object = out

        return res

    
    def update_device_camera_wireless_profiles(self, request: operations.UpdateDeviceCameraWirelessProfilesRequest) -> operations.UpdateDeviceCameraWirelessProfilesResponse:
        r"""Assign wireless profiles to the given camera
        Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def update_device_cellular_gateway_lan(self, request: operations.UpdateDeviceCellularGatewayLanRequest) -> operations.UpdateDeviceCellularGatewayLanResponse:
        r"""Update the LAN Settings for a single MG.
        Update the LAN Settings for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    def update_device_cellular_gateway_port_forwarding_rules(self, request: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest) -> operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse:
        r"""Updates the port forwarding rules for a single MG.
        Updates the port forwarding rules for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

        return res

    
    def update_device_management_interface(self, request: operations.UpdateDeviceManagementInterfaceRequest) -> operations.UpdateDeviceManagementInterfaceResponse:
        r"""Update the management interface settings for a device
        Update the management interface settings for a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_management_interface_200_application_json_object = out

        return res

    
    def update_device_switch_port(self, request: operations.UpdateDeviceSwitchPortRequest) -> operations.UpdateDeviceSwitchPortResponse:
        r"""Update a switch port
        Update a switch port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_port_200_application_json_object = out

        return res

    
    def update_device_switch_routing_interface(self, request: operations.UpdateDeviceSwitchRoutingInterfaceRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceResponse:
        r"""Update a layer 3 interface for a switch
        Update a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_200_application_json_object = out

        return res

    
    def update_device_switch_routing_interface_dhcp(self, request: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
        r"""Update a layer 3 interface DHCP configuration for a switch
        Update a layer 3 interface DHCP configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def update_device_switch_routing_static_route(self, request: operations.UpdateDeviceSwitchRoutingStaticRouteRequest) -> operations.UpdateDeviceSwitchRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch
        Update a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def update_device_switch_warm_spare(self, request: operations.UpdateDeviceSwitchWarmSpareRequest) -> operations.UpdateDeviceSwitchWarmSpareResponse:
        r"""Update warm spare configuration for a switch
        Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def update_device_wireless_bluetooth_settings(self, request: operations.UpdateDeviceWirelessBluetoothSettingsRequest) -> operations.UpdateDeviceWirelessBluetoothSettingsResponse:
        r"""Update the bluetooth settings for a wireless device
        Update the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_device_wireless_radio_settings(self, request: operations.UpdateDeviceWirelessRadioSettingsRequest) -> operations.UpdateDeviceWirelessRadioSettingsResponse:
        r"""Update the radio settings of a device
        Update the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def update_network(self, request: operations.UpdateNetworkRequest) -> operations.UpdateNetworkResponse:
        r"""Update a network
        Update a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_200_application_json_object = out

        return res

    
    def update_network_alerts_settings(self, request: operations.UpdateNetworkAlertsSettingsRequest) -> operations.UpdateNetworkAlertsSettingsResponse:
        r"""Update the alert configuration for this network
        Update the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_alerts_settings_200_application_json_object = out

        return res

    
    def update_network_appliance_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
        r"""Update the connectivity testing destinations for an MX network
        Update the connectivity testing destinations for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def update_network_appliance_content_filtering(self, request: operations.UpdateNetworkApplianceContentFilteringRequest) -> operations.UpdateNetworkApplianceContentFilteringResponse:
        r"""Update the content filtering settings for an MX network
        Update the content filtering settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_cellular_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse:
        r"""Update the cellular firewall rules of an MX network
        Update the cellular firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_firewalled_service(self, request: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest) -> operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse:
        r"""Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_inbound_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse:
        r"""Update the inbound firewall rules of an MX network
        Update the inbound firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse:
        r"""Update the L3 firewall rules of an MX network
        Update the L3 firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse:
        r"""Update the MX L7 firewall rules for an MX network
        Update the MX L7 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
        r"""Set the 1:Many NAT mapping rules for an MX network
        Set the 1:Many NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
        r"""Set the 1:1 NAT mapping rules for an MX network
        Set the 1:1 NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_port_forwarding_rules(self, request: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
        r"""Update the port forwarding rules for an MX network
        Update the port forwarding rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_port(self, request: operations.UpdateNetworkAppliancePortRequest) -> operations.UpdateNetworkAppliancePortResponse:
        r"""Update the per-port VLAN settings for a single MX port.
        Update the per-port VLAN settings for a single MX port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_port_200_application_json_object = out

        return res

    
    def update_network_appliance_security_intrusion(self, request: operations.UpdateNetworkApplianceSecurityIntrusionRequest) -> operations.UpdateNetworkApplianceSecurityIntrusionResponse:
        r"""Set the supported intrusion settings for an MX network
        Set the supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_network_appliance_security_malware(self, request: operations.UpdateNetworkApplianceSecurityMalwareRequest) -> operations.UpdateNetworkApplianceSecurityMalwareResponse:
        r"""Set the supported malware settings for an MX network
        Set the supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_malware_200_application_json_object = out

        return res

    
    def update_network_appliance_single_lan(self, request: operations.UpdateNetworkApplianceSingleLanRequest) -> operations.UpdateNetworkApplianceSingleLanResponse:
        r"""Update single LAN configuration
        Update single LAN configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_single_lan_200_application_json_object = out

        return res

    
    def update_network_appliance_static_route(self, request: operations.UpdateNetworkApplianceStaticRouteRequest) -> operations.UpdateNetworkApplianceStaticRouteResponse:
        r"""Update a static route for an MX or teleworker network
        Update a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_static_route_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping(self, request: operations.UpdateNetworkApplianceTrafficShapingRequest) -> operations.UpdateNetworkApplianceTrafficShapingResponse:
        r"""Update the traffic shaping settings for an MX network
        Update the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Update a custom performance class for an MX network
        Update a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_rules(self, request: operations.UpdateNetworkApplianceTrafficShapingRulesRequest) -> operations.UpdateNetworkApplianceTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings rules for an MX network
        Update the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Updates the uplink bandwidth settings for your MX network.
        Updates the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_selection(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Update uplink selection settings for an MX network
        Update uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def update_network_appliance_vlan(self, request: operations.UpdateNetworkApplianceVlanRequest) -> operations.UpdateNetworkApplianceVlanResponse:
        r"""Update a VLAN
        Update a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlan_200_application_json_object = out

        return res

    
    def update_network_appliance_vlans_settings(self, request: operations.UpdateNetworkApplianceVlansSettingsRequest) -> operations.UpdateNetworkApplianceVlansSettingsResponse:
        r"""Enable/Disable VLANs for the given network
        Enable/Disable VLANs for the given network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    def update_network_appliance_vpn_bgp(self, request: operations.UpdateNetworkApplianceVpnBgpRequest) -> operations.UpdateNetworkApplianceVpnBgpResponse:
        r"""Update a Hub BGP Configuration
        Update a Hub BGP Configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    def update_network_appliance_vpn_site_to_site_vpn(self, request: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
        r"""Update the site-to-site VPN settings of a network
        Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    def update_network_appliance_warm_spare(self, request: operations.UpdateNetworkApplianceWarmSpareRequest) -> operations.UpdateNetworkApplianceWarmSpareResponse:
        r"""Update MX warm spare settings
        Update MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def update_network_camera_quality_retention_profile(self, request: operations.UpdateNetworkCameraQualityRetentionProfileRequest) -> operations.UpdateNetworkCameraQualityRetentionProfileResponse:
        r"""Update an existing quality retention profile for this network.
        Update an existing quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def update_network_camera_wireless_profile(self, request: operations.UpdateNetworkCameraWirelessProfileRequest) -> operations.UpdateNetworkCameraWirelessProfileResponse:
        r"""Update an existing camera wireless profile in this network.
        Update an existing camera wireless profile in this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        r"""Update the connectivity testing destinations for an MG network
        Update the connectivity testing destinations for an MG network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_dhcp(self, request: operations.UpdateNetworkCellularGatewayDhcpRequest) -> operations.UpdateNetworkCellularGatewayDhcpResponse:
        r"""Update common DHCP settings of MGs
        Update common DHCP settings of MGs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_subnet_pool(self, request: operations.UpdateNetworkCellularGatewaySubnetPoolRequest) -> operations.UpdateNetworkCellularGatewaySubnetPoolResponse:
        r"""Update the subnet pool and mask configuration for MGs in the network.
        Update the subnet pool and mask configuration for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_uplink(self, request: operations.UpdateNetworkCellularGatewayUplinkRequest) -> operations.UpdateNetworkCellularGatewayUplinkResponse:
        r"""Updates the uplink settings for your MG network.
        Updates the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    def update_network_client_policy(self, request: operations.UpdateNetworkClientPolicyRequest) -> operations.UpdateNetworkClientPolicyResponse:
        r"""Update the policy assigned to a client on the network
        Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_policy_200_application_json_object = out

        return res

    
    def update_network_client_splash_authorization_status(self, request: operations.UpdateNetworkClientSplashAuthorizationStatusRequest) -> operations.UpdateNetworkClientSplashAuthorizationStatusResponse:
        r"""Update a client's splash authorization
        Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def update_network_firmware_upgrades(self, request: operations.UpdateNetworkFirmwareUpgradesRequest) -> operations.UpdateNetworkFirmwareUpgradesResponse:
        r"""Update firmware upgrade information for a network
        Update firmware upgrade information for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_firmware_upgrades_200_application_json_object = out

        return res

    
    def update_network_floor_plan(self, request: operations.UpdateNetworkFloorPlanRequest) -> operations.UpdateNetworkFloorPlanResponse:
        r"""Update a floor plan's geolocation and other meta data
        Update a floor plan's geolocation and other meta data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_floor_plan_200_application_json_object = out

        return res

    
    def update_network_group_policy(self, request: operations.UpdateNetworkGroupPolicyRequest) -> operations.UpdateNetworkGroupPolicyResponse:
        r"""Update a group policy
        Update a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_group_policy_200_application_json_object = out

        return res

    
    def update_network_meraki_auth_user(self, request: operations.UpdateNetworkMerakiAuthUserRequest) -> operations.UpdateNetworkMerakiAuthUserResponse:
        r"""Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_meraki_auth_user_200_application_json_object = out

        return res

    
    def update_network_mqtt_broker(self, request: operations.UpdateNetworkMqttBrokerRequest) -> operations.UpdateNetworkMqttBrokerResponse:
        r"""Update an MQTT broker
        Update an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_mqtt_broker_200_application_json_object = out

        return res

    
    def update_network_netflow(self, request: operations.UpdateNetworkNetflowRequest) -> operations.UpdateNetworkNetflowResponse:
        r"""Update the NetFlow traffic reporting settings for a network
        Update the NetFlow traffic reporting settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_netflow_200_application_json_object = out

        return res

    
    def update_network_settings(self, request: operations.UpdateNetworkSettingsRequest) -> operations.UpdateNetworkSettingsResponse:
        r"""Update the settings for a network
        Update the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_settings_200_application_json_object = out

        return res

    
    def update_network_sm_devices_fields(self, request: operations.UpdateNetworkSmDevicesFieldsRequest) -> operations.UpdateNetworkSmDevicesFieldsResponse:
        r"""Modify the fields of a device
        Modify the fields of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmDevicesFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_devices_fields_200_application_json_object = out

        return res

    
    def update_network_sm_target_group(self, request: operations.UpdateNetworkSmTargetGroupRequest) -> operations.UpdateNetworkSmTargetGroupResponse:
        r"""Update a target group
        Update a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_target_group_200_application_json_object = out

        return res

    
    def update_network_snmp(self, request: operations.UpdateNetworkSnmpRequest) -> operations.UpdateNetworkSnmpResponse:
        r"""Update the SNMP settings for a network
        Update the SNMP settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_snmp_200_application_json_object = out

        return res

    
    def update_network_switch_access_control_lists(self, request: operations.UpdateNetworkSwitchAccessControlListsRequest) -> operations.UpdateNetworkSwitchAccessControlListsResponse:
        r"""Update the access control lists for a MS network
        Update the access control lists for a MS network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    def update_network_switch_access_policy(self, request: operations.UpdateNetworkSwitchAccessPolicyRequest) -> operations.UpdateNetworkSwitchAccessPolicyResponse:
        r"""Update an access policy for a switch network
        Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_policy_200_application_json_object = out

        return res

    
    def update_network_switch_alternate_management_interface(self, request: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest) -> operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse:
        r"""Update the switch alternate management interface for the network
        Update the switch alternate management interface for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    def update_network_switch_dhcp_server_policy(self, request: operations.UpdateNetworkSwitchDhcpServerPolicyRequest) -> operations.UpdateNetworkSwitchDhcpServerPolicyResponse:
        r"""Update the DHCP server policy
        Update the DHCP server policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    def update_network_switch_dscp_to_cos_mappings(self, request: operations.UpdateNetworkSwitchDscpToCosMappingsRequest) -> operations.UpdateNetworkSwitchDscpToCosMappingsResponse:
        r"""Update the DSCP to CoS mappings
        Update the DSCP to CoS mappings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    def update_network_switch_link_aggregation(self, request: operations.UpdateNetworkSwitchLinkAggregationRequest) -> operations.UpdateNetworkSwitchLinkAggregationResponse:
        r"""Update a link aggregation group
        Update a link aggregation group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_link_aggregation_200_application_json_object = out

        return res

    
    def update_network_switch_mtu(self, request: operations.UpdateNetworkSwitchMtuRequest) -> operations.UpdateNetworkSwitchMtuResponse:
        r"""Update the MTU configuration
        Update the MTU configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_mtu_200_application_json_object = out

        return res

    
    def update_network_switch_port_schedule(self, request: operations.UpdateNetworkSwitchPortScheduleRequest) -> operations.UpdateNetworkSwitchPortScheduleResponse:
        r"""Update a switch port schedule
        Update a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_port_schedule_200_application_json_object = out

        return res

    
    def update_network_switch_qos_rule(self, request: operations.UpdateNetworkSwitchQosRuleRequest) -> operations.UpdateNetworkSwitchQosRuleResponse:
        r"""Update a quality of service rule
        Update a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rule_200_application_json_object = out

        return res

    
    def update_network_switch_qos_rules_order(self, request: operations.UpdateNetworkSwitchQosRulesOrderRequest) -> operations.UpdateNetworkSwitchQosRulesOrderResponse:
        r"""Update the order in which the rules should be processed by the switch
        Update the order in which the rules should be processed by the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rules_order_200_application_json_object = out

        return res

    
    def update_network_switch_routing_multicast(self, request: operations.UpdateNetworkSwitchRoutingMulticastRequest) -> operations.UpdateNetworkSwitchRoutingMulticastResponse:
        r"""Update multicast settings for a network
        Update multicast settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    def update_network_switch_routing_multicast_rendezvous_point(self, request: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Update a multicast rendezvous point
        Update a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    def update_network_switch_routing_ospf(self, request: operations.UpdateNetworkSwitchRoutingOspfRequest) -> operations.UpdateNetworkSwitchRoutingOspfResponse:
        r"""Update layer 3 OSPF routing configuration
        Update layer 3 OSPF routing configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    def update_network_switch_settings(self, request: operations.UpdateNetworkSwitchSettingsRequest) -> operations.UpdateNetworkSwitchSettingsResponse:
        r"""Update switch network settings
        Update switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_settings_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Update a layer 3 interface for a switch stack
        Update a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface_dhcp(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Update a layer 3 interface DHCP configuration for a switch stack
        Update a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_static_route(self, request: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch stack
        Update a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    def update_network_switch_storm_control(self, request: operations.UpdateNetworkSwitchStormControlRequest) -> operations.UpdateNetworkSwitchStormControlResponse:
        r"""Update the storm control configuration for a switch network
        Update the storm control configuration for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_storm_control_200_application_json_object = out

        return res

    
    def update_network_switch_stp(self, request: operations.UpdateNetworkSwitchStpRequest) -> operations.UpdateNetworkSwitchStpResponse:
        r"""Updates STP settings
        Updates STP settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stp_200_application_json_object = out

        return res

    
    def update_network_syslog_servers(self, request: operations.UpdateNetworkSyslogServersRequest) -> operations.UpdateNetworkSyslogServersResponse:
        r"""Update the syslog servers for a network
        Update the syslog servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_syslog_servers_200_application_json_object = out

        return res

    
    def update_network_traffic_analysis(self, request: operations.UpdateNetworkTrafficAnalysisRequest) -> operations.UpdateNetworkTrafficAnalysisResponse:
        r"""Update the traffic analysis settings for a network
        Update the traffic analysis settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_traffic_analysis_200_application_json_object = out

        return res

    
    def update_network_webhooks_http_server(self, request: operations.UpdateNetworkWebhooksHTTPServerRequest) -> operations.UpdateNetworkWebhooksHTTPServerResponse:
        r"""Update an HTTP server
        Update an HTTP server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_webhooks_http_server_200_application_json_object = out

        return res

    
    def update_network_wireless_alternate_management_interface(self, request: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest) -> operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse:
        r"""Update alternate management interface and device static IP
        Update alternate management interface and device static IP
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    def update_network_wireless_billing(self, request: operations.UpdateNetworkWirelessBillingRequest) -> operations.UpdateNetworkWirelessBillingResponse:
        r"""Update the billing settings
        Update the billing settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_billing_200_application_json_object = out

        return res

    
    def update_network_wireless_bluetooth_settings(self, request: operations.UpdateNetworkWirelessBluetoothSettingsRequest) -> operations.UpdateNetworkWirelessBluetoothSettingsResponse:
        r"""Update the Bluetooth settings for a network
        Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_rf_profile(self, request: operations.UpdateNetworkWirelessRfProfileRequest) -> operations.UpdateNetworkWirelessRfProfileResponse:
        r"""Updates specified RF profile for this network
        Updates specified RF profile for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    def update_network_wireless_settings(self, request: operations.UpdateNetworkWirelessSettingsRequest) -> operations.UpdateNetworkWirelessSettingsResponse:
        r"""Update the wireless settings for a network
        Update the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid(self, request: operations.UpdateNetworkWirelessSsidRequest) -> operations.UpdateNetworkWirelessSsidResponse:
        r"""Update the attributes of an MR SSID
        Update the attributes of an MR SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_bonjour_forwarding(self, request: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest) -> operations.UpdateNetworkWirelessSsidBonjourForwardingResponse:
        r"""Update the bonjour forwarding setting and rules for the SSID
        Update the bonjour forwarding setting and rules for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_device_type_group_policies(self, request: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""Update the device type group policies for the SSID
        Update the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_eap_override(self, request: operations.UpdateNetworkWirelessSsidEapOverrideRequest) -> operations.UpdateNetworkWirelessSsidEapOverrideResponse:
        r"""Update the EAP overridden parameters for an SSID.
        Update the EAP overridden parameters for an SSID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        r"""Update the L3 firewall rules of an SSID on an MR network
        Update the L3 firewall rules of an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        r"""Update the L7 firewall rules of an SSID on an MR network
        Update the L7 firewall rules of an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_hotspot20(self, request: operations.UpdateNetworkWirelessSsidHotspot20Request) -> operations.UpdateNetworkWirelessSsidHotspot20Response:
        r"""Update the Hotspot 2.0 settings of an SSID
        Update the Hotspot 2.0 settings of an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_identity_psk(self, request: operations.UpdateNetworkWirelessSsidIdentityPskRequest) -> operations.UpdateNetworkWirelessSsidIdentityPskResponse:
        r"""Update an Identity PSK
        Update an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_schedules(self, request: operations.UpdateNetworkWirelessSsidSchedulesRequest) -> operations.UpdateNetworkWirelessSsidSchedulesResponse:
        r"""Update the outage schedule for the SSID
        Update the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_splash_settings(self, request: operations.UpdateNetworkWirelessSsidSplashSettingsRequest) -> operations.UpdateNetworkWirelessSsidSplashSettingsResponse:
        r"""Modify the splash page settings for the given SSID
        Modify the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_traffic_shaping_rules(self, request: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings for an SSID on an MR network
        Update the traffic shaping settings for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_vpn(self, request: operations.UpdateNetworkWirelessSsidVpnRequest) -> operations.UpdateNetworkWirelessSsidVpnResponse:
        r"""Update the VPN settings for the SSID
        Update the VPN settings for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    
    def update_organization(self, request: operations.UpdateOrganizationRequest) -> operations.UpdateOrganizationResponse:
        r"""Update an organization
        Update an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_200_application_json_object = out

        return res

    
    def update_organization_action_batch(self, request: operations.UpdateOrganizationActionBatchRequest) -> operations.UpdateOrganizationActionBatchResponse:
        r"""Update an action batch
        Update an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_action_batch_200_application_json_object = out

        return res

    
    def update_organization_adaptive_policy_acl(self, request: operations.UpdateOrganizationAdaptivePolicyACLRequest) -> operations.UpdateOrganizationAdaptivePolicyACLResponse:
        r"""Updates an adaptive policy ACL
        Updates an adaptive policy ACL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def update_organization_adaptive_policy_settings(self, request: operations.UpdateOrganizationAdaptivePolicySettingsRequest) -> operations.UpdateOrganizationAdaptivePolicySettingsResponse:
        r"""Update global adaptive policy settings
        Update global adaptive policy settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    def update_organization_admin(self, request: operations.UpdateOrganizationAdminRequest) -> operations.UpdateOrganizationAdminResponse:
        r"""Update an administrator
        Update an administrator
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_admin_200_application_json_object = out

        return res

    
    def update_organization_appliance_security_intrusion(self, request: operations.UpdateOrganizationApplianceSecurityIntrusionRequest) -> operations.UpdateOrganizationApplianceSecurityIntrusionResponse:
        r"""Sets supported intrusion settings for an organization
        Sets supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        r"""Update the third party VPN peers for an organization
        Update the third party VPN peers for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    def update_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
        r"""Update the firewall rules of an organization's site-to-site VPN
        Update the firewall rules of an organization's site-to-site VPN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    
    def update_organization_branding_policies_priorities(self, request: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest) -> operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Update the priority ordering of an organization's branding policies.
        Update the priority ordering of an organization's branding policies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def update_organization_branding_policy(self, request: operations.UpdateOrganizationBrandingPolicyRequest) -> operations.UpdateOrganizationBrandingPolicyResponse:
        r"""Update a branding policy
        Update a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policy_200_application_json_object = out

        return res

    
    def update_organization_camera_onboarding_statuses(self, request: operations.UpdateOrganizationCameraOnboardingStatusesRequest) -> operations.UpdateOrganizationCameraOnboardingStatusesResponse:
        r"""Notify that credential handoff to camera has completed
        Notify that credential handoff to camera has completed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    
    def update_organization_config_template(self, request: operations.UpdateOrganizationConfigTemplateRequest) -> operations.UpdateOrganizationConfigTemplateResponse:
        r"""Update a configuration template
        Update a configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_200_application_json_object = out

        return res

    
    def update_organization_config_template_switch_profile_port(self, request: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Update a switch profile port
        Update a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    def update_organization_insight_monitored_media_server(self, request: operations.UpdateOrganizationInsightMonitoredMediaServerRequest) -> operations.UpdateOrganizationInsightMonitoredMediaServerResponse:
        r"""Update a monitored media server for this organization
        Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationInsightMonitoredMediaServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_insight_monitored_media_server_200_application_json_object = out

        return res

    
    def update_organization_license(self, request: operations.UpdateOrganizationLicenseRequest) -> operations.UpdateOrganizationLicenseResponse:
        r"""Update a license
        Update a license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_license_200_application_json_object = out

        return res

    
    def update_organization_login_security(self, request: operations.UpdateOrganizationLoginSecurityRequest) -> operations.UpdateOrganizationLoginSecurityResponse:
        r"""Update the login security settings for an organization
        Update the login security settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_login_security_200_application_json_object = out

        return res

    
    def update_organization_saml(self, request: operations.UpdateOrganizationSamlRequest) -> operations.UpdateOrganizationSamlResponse:
        r"""Updates the SAML SSO enabled settings for an organization.
        Updates the SAML SSO enabled settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_200_application_json_object = out

        return res

    
    def update_organization_saml_idp(self, request: operations.UpdateOrganizationSamlIdpRequest) -> operations.UpdateOrganizationSamlIdpResponse:
        r"""Update a SAML IdP in your organization
        Update a SAML IdP in your organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_idp_200_application_json_object = out

        return res

    
    def update_organization_saml_role(self, request: operations.UpdateOrganizationSamlRoleRequest) -> operations.UpdateOrganizationSamlRoleResponse:
        r"""Update a SAML role
        Update a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_role_200_application_json_object = out

        return res

    
    def update_organization_snmp(self, request: operations.UpdateOrganizationSnmpRequest) -> operations.UpdateOrganizationSnmpResponse:
        r"""Update the SNMP settings for an organization
        Update the SNMP settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_snmp_200_application_json_object = out

        return res

    
    def wipe_network_sm_devices(self, request: operations.WipeNetworkSmDevicesRequest) -> operations.WipeNetworkSmDevicesResponse:
        r"""Wipe a device
        Wipe a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/wipe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WipeNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.wipe_network_sm_devices_200_application_json_object = out

        return res

    