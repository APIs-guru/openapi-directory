import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Ssids:
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

    