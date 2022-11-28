import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PortForwardingRules:
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

    