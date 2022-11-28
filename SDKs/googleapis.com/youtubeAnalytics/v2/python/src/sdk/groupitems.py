import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class GroupItems:
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

    
    def youtube_analytics_group_items_delete(self, request: operations.YoutubeAnalyticsGroupItemsDeleteRequest) -> operations.YoutubeAnalyticsGroupItemsDeleteResponse:
        r"""Removes an item from a group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/groupItems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeAnalyticsGroupItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def youtube_analytics_group_items_insert(self, request: operations.YoutubeAnalyticsGroupItemsInsertRequest) -> operations.YoutubeAnalyticsGroupItemsInsertResponse:
        r"""Creates a group item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/groupItems"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeAnalyticsGroupItemsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupItem])
                res.group_item = out

        return res

    
    def youtube_analytics_group_items_list(self, request: operations.YoutubeAnalyticsGroupItemsListRequest) -> operations.YoutubeAnalyticsGroupItemsListResponse:
        r"""Returns a collection of group items that match the API request parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/groupItems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeAnalyticsGroupItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupItemsResponse])
                res.list_group_items_response = out

        return res

    