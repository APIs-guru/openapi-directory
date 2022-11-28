import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class IdentityPsks:
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

    