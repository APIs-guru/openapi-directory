import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class SiteToSiteVpn:
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

    