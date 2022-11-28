import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Indexing:
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

    
    def cloudsearch_indexing_datasources_delete_schema(self, request: operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest) -> operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse:
        r"""Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/schema", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_indexing_datasources_get_schema(self, request: operations.CloudsearchIndexingDatasourcesGetSchemaRequest) -> operations.CloudsearchIndexingDatasourcesGetSchemaResponse:
        r"""Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/schema", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesGetSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Schema])
                res.schema = out

        return res

    
    def cloudsearch_indexing_datasources_items_delete(self, request: operations.CloudsearchIndexingDatasourcesItemsDeleteRequest) -> operations.CloudsearchIndexingDatasourcesItemsDeleteResponse:
        r"""Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_indexing_datasources_items_delete_queue_items(self, request: operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest) -> operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse:
        r"""Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/items:deleteQueueItems", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_indexing_datasources_items_get(self, request: operations.CloudsearchIndexingDatasourcesItemsGetRequest) -> operations.CloudsearchIndexingDatasourcesItemsGetResponse:
        r"""Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Item])
                res.item = out

        return res

    
    def cloudsearch_indexing_datasources_items_index(self, request: operations.CloudsearchIndexingDatasourcesItemsIndexRequest) -> operations.CloudsearchIndexingDatasourcesItemsIndexResponse:
        r"""Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}:index", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_indexing_datasources_items_list(self, request: operations.CloudsearchIndexingDatasourcesItemsListRequest) -> operations.CloudsearchIndexingDatasourcesItemsListResponse:
        r"""Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListItemsResponse])
                res.list_items_response = out

        return res

    
    def cloudsearch_indexing_datasources_items_poll(self, request: operations.CloudsearchIndexingDatasourcesItemsPollRequest) -> operations.CloudsearchIndexingDatasourcesItemsPollResponse:
        r"""Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/items:poll", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsPollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PollItemsResponse])
                res.poll_items_response = out

        return res

    
    def cloudsearch_indexing_datasources_items_push(self, request: operations.CloudsearchIndexingDatasourcesItemsPushRequest) -> operations.CloudsearchIndexingDatasourcesItemsPushResponse:
        r"""Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}:push", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsPushResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Item])
                res.item = out

        return res

    
    def cloudsearch_indexing_datasources_items_unreserve(self, request: operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest) -> operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse:
        r"""Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/items:unreserve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_indexing_datasources_items_upload(self, request: operations.CloudsearchIndexingDatasourcesItemsUploadRequest) -> operations.CloudsearchIndexingDatasourcesItemsUploadResponse:
        r"""Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}:upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesItemsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadItemRef])
                res.upload_item_ref = out

        return res

    
    def cloudsearch_indexing_datasources_update_schema(self, request: operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest) -> operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse:
        r"""Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/indexing/{name}/schema", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    