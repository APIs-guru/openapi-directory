

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.nexmo.com/v3/media",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_a_media_item(self) -> operations.DeleteAMediaItemResponse:
        r"""Delete a media item
        Delete a previously created media item by ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/:id"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAMediaItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def list_and_search_media_items(self, request: operations.ListAndSearchMediaItemsRequest) -> operations.ListAndSearchMediaItemsResponse:
        r"""List and search media items
        Retrieve information about multiple media items with the ability to search and paginate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAndSearchMediaItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAndSearchMediaItems200ApplicationJSON])
                res.list_and_search_media_items_200_application_json_object = out

        return res

    
    def retrieve_a_media_item(self) -> operations.RetrieveAMediaItemResponse:
        r"""Retrieve a media item
        Retrieve information about a single media item
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/:id/info"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAMediaItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Media])
                res.media = out

        return res

    
    def update_a_media_item(self, request: operations.UpdateAMediaItemRequest) -> operations.UpdateAMediaItemResponse:
        r"""Update a media item
        Update a previously created media item by ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/:id/info"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAMediaItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    