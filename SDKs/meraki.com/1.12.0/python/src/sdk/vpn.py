import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Vpn:
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

    
    def get_organization_appliance_vpn_stats(self, request: operations.GetOrganizationApplianceVpnStatsRequest) -> operations.GetOrganizationApplianceVpnStatsResponse:
        r"""Show VPN history stat for networks in an organization
        Show VPN history stat for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/stats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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

    