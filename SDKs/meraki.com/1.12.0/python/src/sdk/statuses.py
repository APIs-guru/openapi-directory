import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Statuses:
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

    
    def get_device_switch_ports_statuses(self, request: operations.GetDeviceSwitchPortsStatusesRequest) -> operations.GetDeviceSwitchPortsStatusesResponse:
        r"""Return the status for all the ports of a switch
        Return the status for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_200_application_json_object = out

        return res

    
    def get_device_switch_ports_statuses_packets(self, request: operations.GetDeviceSwitchPortsStatusesPacketsRequest) -> operations.GetDeviceSwitchPortsStatusesPacketsResponse:
        r"""Return the packet counters for all the ports of a switch
        Return the packet counters for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses/packets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesPacketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_packets_200_application_json_object = out

        return res

    
    def get_organization_appliance_uplink_statuses(self, request: operations.GetOrganizationApplianceUplinkStatusesRequest) -> operations.GetOrganizationApplianceUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MX and Z series appliances in the organization
        List the uplink status of every Meraki MX and Z series appliances in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_statuses(self, request: operations.GetOrganizationApplianceVpnStatusesRequest) -> operations.GetOrganizationApplianceVpnStatusesResponse:
        r"""Show VPN status for networks in an organization
        Show VPN status for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_statuses_200_application_json_object = out

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

    
    def get_organization_cellular_gateway_uplink_statuses(self, request: operations.GetOrganizationCellularGatewayUplinkStatusesRequest) -> operations.GetOrganizationCellularGatewayUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MG cellular gateway in the organization
        List the uplink status of every Meraki MG cellular gateway in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCellularGatewayUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_cellular_gateway_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_devices_statuses(self, request: operations.GetOrganizationDevicesStatusesRequest) -> operations.GetOrganizationDevicesStatusesResponse:
        r"""List the status of every Meraki device in the organization
        List the status of every Meraki device in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_statuses_200_application_json_object = out

        return res

    
    def get_organization_uplinks_statuses(self, request: operations.GetOrganizationUplinksStatusesRequest) -> operations.GetOrganizationUplinksStatusesResponse:
        r"""List the uplink status of every Meraki MX, MG and Z series devices in the organization
        List the uplink status of every Meraki MX, MG and Z series devices in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/uplinks/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationUplinksStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_uplinks_statuses_200_application_json_object = out

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

    