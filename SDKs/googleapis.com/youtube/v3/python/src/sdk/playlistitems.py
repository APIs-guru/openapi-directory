import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PlaylistItems:
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

    
    def youtube_playlist_items_delete(self, request: operations.YoutubePlaylistItemsDeleteRequest) -> operations.YoutubePlaylistItemsDeleteResponse:
        r"""Deletes a resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/playlistItems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubePlaylistItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_playlist_items_insert(self, request: operations.YoutubePlaylistItemsInsertRequest) -> operations.YoutubePlaylistItemsInsertResponse:
        r"""Inserts a new resource into this collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/playlistItems"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubePlaylistItemsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistItem])
                res.playlist_item = out

        return res

    
    def youtube_playlist_items_list(self, request: operations.YoutubePlaylistItemsListRequest) -> operations.YoutubePlaylistItemsListResponse:
        r"""Retrieves a list of resources, possibly filtered.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/playlistItems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubePlaylistItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistItemListResponse])
                res.playlist_item_list_response = out

        return res

    
    def youtube_playlist_items_update(self, request: operations.YoutubePlaylistItemsUpdateRequest) -> operations.YoutubePlaylistItemsUpdateResponse:
        r"""Updates an existing resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/playlistItems"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubePlaylistItemsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistItem])
                res.playlist_item = out

        return res

    