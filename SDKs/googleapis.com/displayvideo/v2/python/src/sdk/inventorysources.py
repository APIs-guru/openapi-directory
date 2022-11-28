import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class InventorySources:
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

    
    def displayvideo_inventory_sources_create(self, request: operations.DisplayvideoInventorySourcesCreateRequest) -> operations.DisplayvideoInventorySourcesCreateResponse:
        r"""Creates a new inventory source. Returns the newly created inventory source if successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/inventorySources"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    
    def displayvideo_inventory_sources_edit_inventory_source_read_write_accessors(self, request: operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest) -> operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse:
        r"""Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySources/{inventorySourceId}:editInventorySourceReadWriteAccessors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceAccessors])
                res.inventory_source_accessors = out

        return res

    
    def displayvideo_inventory_sources_get(self, request: operations.DisplayvideoInventorySourcesGetRequest) -> operations.DisplayvideoInventorySourcesGetResponse:
        r"""Gets an inventory source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySources/{inventorySourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    
    def displayvideo_inventory_sources_list(self, request: operations.DisplayvideoInventorySourcesListRequest) -> operations.DisplayvideoInventorySourcesListResponse:
        r"""Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/inventorySources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventorySourcesResponse])
                res.list_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_sources_patch(self, request: operations.DisplayvideoInventorySourcesPatchRequest) -> operations.DisplayvideoInventorySourcesPatchResponse:
        r"""Updates an existing inventory source. Returns the updated inventory source if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySources/{inventorySourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    