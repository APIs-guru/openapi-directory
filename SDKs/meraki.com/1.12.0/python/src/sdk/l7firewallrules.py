import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class L7FirewallRules:
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

    