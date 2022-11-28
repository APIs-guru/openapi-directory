import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DynamicTargetingKeys:
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

    
    def dfareporting_dynamic_targeting_keys_delete(self, request: operations.DfareportingDynamicTargetingKeysDeleteRequest) -> operations.DfareportingDynamicTargetingKeysDeleteResponse:
        r"""Deletes an existing dynamic targeting key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingDynamicTargetingKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dfareporting_dynamic_targeting_keys_insert(self, request: operations.DfareportingDynamicTargetingKeysInsertRequest) -> operations.DfareportingDynamicTargetingKeysInsertResponse:
        r"""Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/dynamicTargetingKeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingDynamicTargetingKeysInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DynamicTargetingKey])
                res.dynamic_targeting_key = out

        return res

    
    def dfareporting_dynamic_targeting_keys_list(self, request: operations.DfareportingDynamicTargetingKeysListRequest) -> operations.DfareportingDynamicTargetingKeysListResponse:
        r"""Retrieves a list of dynamic targeting keys.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/dynamicTargetingKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingDynamicTargetingKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DynamicTargetingKeysListResponse])
                res.dynamic_targeting_keys_list_response = out

        return res

    