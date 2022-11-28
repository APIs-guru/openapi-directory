import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Ports:
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

    
    def cycle_device_switch_ports(self, request: operations.CycleDeviceSwitchPortsRequest) -> operations.CycleDeviceSwitchPortsResponse:
        r"""Cycle a set of switch ports
        Cycle a set of switch ports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/cycle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CycleDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cycle_device_switch_ports_200_application_json_object = out

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

    