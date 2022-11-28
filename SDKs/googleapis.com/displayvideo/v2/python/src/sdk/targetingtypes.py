import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TargetingTypes:
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

    
    def displayvideo_targeting_types_targeting_options_get(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse:
        r"""Gets a single targeting option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/targetingTypes/{targetingType}/targetingOptions/{targetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingOption])
                res.targeting_option = out

        return res

    
    def displayvideo_targeting_types_targeting_options_list(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsListRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsListResponse:
        r"""Lists targeting options of a given type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/targetingTypes/{targetingType}/targetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTargetingOptionsResponse])
                res.list_targeting_options_response = out

        return res

    
    def displayvideo_targeting_types_targeting_options_search(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse:
        r"""Searches for targeting options of a given type based on the given search terms.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/targetingTypes/{targetingType}/targetingOptions:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchTargetingOptionsResponse])
                res.search_targeting_options_response = out

        return res

    