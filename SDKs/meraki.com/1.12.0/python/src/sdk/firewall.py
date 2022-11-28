import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Firewall:
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

    