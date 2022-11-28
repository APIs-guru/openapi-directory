import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Dhcp:
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

    
    def get_device_appliance_dhcp_subnets(self, request: operations.GetDeviceApplianceDhcpSubnetsRequest) -> operations.GetDeviceApplianceDhcpSubnetsResponse:
        r"""Return the DHCP subnet information for an appliance
        Return the DHCP subnet information for an appliance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/dhcp/subnets", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceApplianceDhcpSubnetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_dhcp_subnets_200_application_json_object = out

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

    