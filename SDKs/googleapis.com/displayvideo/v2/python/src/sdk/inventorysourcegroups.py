import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class InventorySourceGroups:
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

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_bulk_edit(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse:
        r"""Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAssignedInventorySourcesResponse])
                res.bulk_edit_assigned_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_create(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse:
        r"""Creates an assignment between an inventory source and an inventory source group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedInventorySource])
                res.assigned_inventory_source = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_delete(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse:
        r"""Deletes the assignment between an inventory source and an inventory source group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_list(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse:
        r"""Lists inventory sources assigned to an inventory source group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignedInventorySourcesResponse])
                res.list_assigned_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_source_groups_create(self, request: operations.DisplayvideoInventorySourceGroupsCreateRequest) -> operations.DisplayvideoInventorySourceGroupsCreateResponse:
        r"""Creates a new inventory source group. Returns the newly created inventory source group if successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/inventorySourceGroups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceGroup])
                res.inventory_source_group = out

        return res

    
    def displayvideo_inventory_source_groups_delete(self, request: operations.DisplayvideoInventorySourceGroupsDeleteRequest) -> operations.DisplayvideoInventorySourceGroupsDeleteResponse:
        r"""Deletes an inventory source group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_inventory_source_groups_get(self, request: operations.DisplayvideoInventorySourceGroupsGetRequest) -> operations.DisplayvideoInventorySourceGroupsGetResponse:
        r"""Gets an inventory source group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/inventorySourceGroups/{inventorySourceGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceGroup])
                res.inventory_source_group = out

        return res

    
    def displayvideo_inventory_source_groups_list(self, request: operations.DisplayvideoInventorySourceGroupsListRequest) -> operations.DisplayvideoInventorySourceGroupsListResponse:
        r"""Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/inventorySourceGroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventorySourceGroupsResponse])
                res.list_inventory_source_groups_response = out

        return res

    