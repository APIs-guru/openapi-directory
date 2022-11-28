import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class InboundFirewallRules:
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

    