import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Pii:
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

    
    def create_network_pii_request(self, request: operations.CreateNetworkPiiRequestRequest) -> operations.CreateNetworkPiiRequestResponse:
        r"""Submit a new delete or restrict processing PII request
        Submit a new delete or restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_pii_request_201_application_json_object = out

        return res

    
    def delete_network_pii_request(self, request: operations.DeleteNetworkPiiRequestRequest) -> operations.DeleteNetworkPiiRequestResponse:
        r"""Delete a restrict processing PII request
        Delete a restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_pii_pii_keys(self, request: operations.GetNetworkPiiPiiKeysRequest) -> operations.GetNetworkPiiPiiKeysResponse:
        r"""List the keys required to access Personally Identifiable Information (PII) for a given identifier
        List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/piiKeys
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/piiKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiPiiKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_pii_keys_200_application_json_object = out

        return res

    
    def get_network_pii_request(self, request: operations.GetNetworkPiiRequestRequest) -> operations.GetNetworkPiiRequestResponse:
        r"""Return a PII request
        Return a PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_request_200_application_json_object = out

        return res

    
    def get_network_pii_requests(self, request: operations.GetNetworkPiiRequestsRequest) -> operations.GetNetworkPiiRequestsResponse:
        r"""List the PII requests for this network or organization
        List the PII requests for this network or organization
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_requests_200_application_json_object = out

        return res

    
    def get_network_pii_sm_devices_for_key(self, request: operations.GetNetworkPiiSmDevicesForKeyRequest) -> operations.GetNetworkPiiSmDevicesForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smDevicesForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smDevicesForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmDevicesForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_devices_for_key_200_application_json_object = out

        return res

    
    def get_network_pii_sm_owners_for_key(self, request: operations.GetNetworkPiiSmOwnersForKeyRequest) -> operations.GetNetworkPiiSmOwnersForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smOwnersForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smOwnersForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmOwnersForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_owners_for_key_200_application_json_object = out

        return res

    