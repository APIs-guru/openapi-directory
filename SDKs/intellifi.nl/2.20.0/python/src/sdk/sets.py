import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Sets:
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

    
    def add_item_ids_list(self, request: operations.AddItemIdsListRequest) -> operations.AddItemIdsListResponse:
        r"""Add items to an existing list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}/ids", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddItemIdsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseListResource])
                res.response_list_resource = out

        return res

    
    def add_item_ids_spot_list(self, request: operations.AddItemIdsSpotListRequest) -> operations.AddItemIdsSpotListResponse:
        r"""Add spots to an existing list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}/ids", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddItemIdsSpotListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseListResource])
                res.response_list_resource = out

        return res

    
    def add_item_list(self, request: operations.AddItemListRequest) -> operations.AddItemListResponse:
        r"""Create item list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sets/itemlists"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddItemListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def add_spot_list(self, request: operations.AddSpotListRequest) -> operations.AddSpotListResponse:
        r"""Create spot list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sets/spotlists"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSpotListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_item_id_from_item_list(self, request: operations.DeleteItemIDFromItemListRequest) -> operations.DeleteItemIDFromItemListResponse:
        r"""Delete item from list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}/ids/{itemId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemIDFromItemListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseListResource])
                res.response_list_resource = out

        return res

    
    def delete_item_id_from_spot_list(self, request: operations.DeleteItemIDFromSpotListRequest) -> operations.DeleteItemIDFromSpotListResponse:
        r"""Delete spot from list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}/ids/{itemId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemIDFromSpotListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseListResource])
                res.response_list_resource = out

        return res

    
    def delete_item_set(self, request: operations.DeleteItemSetRequest) -> operations.DeleteItemSetResponse:
        r"""Delete item list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_spot_list(self, request: operations.DeleteSpotListRequest) -> operations.DeleteSpotListResponse:
        r"""Delete spot list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSpotListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_item_list_by_id(self, request: operations.GetItemListByIDRequest) -> operations.GetItemListByIDResponse:
        r"""Get item list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemListByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemList])
                res.item_list = out

        return res

    
    def get_item_list_ids_by_id(self, request: operations.GetItemListIdsByIDRequest) -> operations.GetItemListIdsByIDResponse:
        r"""Get item ids for this list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}/ids", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemListIdsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_of_item_ids = out

        return res

    
    def get_item_lists(self, request: operations.GetItemListsRequest) -> operations.GetItemListsResponse:
        r"""Get all item lists
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sets/itemlists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetItemLists200ApplicationJSON])
                res.get_item_lists_200_application_json_object = out

        return res

    
    def get_spot_list_by_id(self, request: operations.GetSpotListByIDRequest) -> operations.GetSpotListByIDResponse:
        r"""Info for a specific spot list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotListByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotList])
                res.spot_list = out

        return res

    
    def get_spot_list_ids_by_id(self, request: operations.GetSpotListIdsByIDRequest) -> operations.GetSpotListIdsByIDResponse:
        r"""Get spot ids for this list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}/ids", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotListIdsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_of_item_ids = out

        return res

    
    def get_spot_lists(self, request: operations.GetSpotListsRequest) -> operations.GetSpotListsResponse:
        r"""Get all spot lists
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sets/spotlists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSpotLists200ApplicationJSON])
                res.get_spot_lists_200_application_json_object = out

        return res

    
    def update_item_list(self, request: operations.UpdateItemListRequest) -> operations.UpdateItemListResponse:
        r"""Update existing item list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/itemlists/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateItemListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def update_spot_list(self, request: operations.UpdateSpotListRequest) -> operations.UpdateSpotListResponse:
        r"""Update existing spot list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sets/spotlists/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpotListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    