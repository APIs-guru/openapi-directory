import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def mybusinessplaceactions_locations_place_action_links_create(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse:
        r"""Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/placeActionLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    
    def mybusinessplaceactions_locations_place_action_links_delete(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse:
        r"""Deletes a place action link from the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessplaceactions_locations_place_action_links_get(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse:
        r"""Gets the specified place action link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    
    def mybusinessplaceactions_locations_place_action_links_list(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse:
        r"""Lists the place action links for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/placeActionLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPlaceActionLinksResponse])
                res.list_place_action_links_response = out

        return res

    
    def mybusinessplaceactions_locations_place_action_links_patch(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse:
        r"""Updates the specified place action link and returns it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    