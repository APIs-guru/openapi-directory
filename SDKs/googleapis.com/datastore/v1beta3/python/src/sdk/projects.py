import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def datastore_projects_allocate_ids(self, request: operations.DatastoreProjectsAllocateIdsRequest) -> operations.DatastoreProjectsAllocateIdsResponse:
        r"""Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:allocateIds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsAllocateIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AllocateIdsResponse])
                res.allocate_ids_response = out

        return res

    
    def datastore_projects_begin_transaction(self, request: operations.DatastoreProjectsBeginTransactionRequest) -> operations.DatastoreProjectsBeginTransactionResponse:
        r"""Begins a new transaction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:beginTransaction", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsBeginTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeginTransactionResponse])
                res.begin_transaction_response = out

        return res

    
    def datastore_projects_commit(self, request: operations.DatastoreProjectsCommitRequest) -> operations.DatastoreProjectsCommitResponse:
        r"""Commits a transaction, optionally creating, deleting or modifying some entities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:commit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitResponse])
                res.commit_response = out

        return res

    
    def datastore_projects_lookup(self, request: operations.DatastoreProjectsLookupRequest) -> operations.DatastoreProjectsLookupResponse:
        r"""Looks up entities by key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:lookup", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LookupResponse])
                res.lookup_response = out

        return res

    
    def datastore_projects_reserve_ids(self, request: operations.DatastoreProjectsReserveIdsRequest) -> operations.DatastoreProjectsReserveIdsResponse:
        r"""Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:reserveIds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsReserveIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reserve_ids_response = out

        return res

    
    def datastore_projects_rollback(self, request: operations.DatastoreProjectsRollbackRequest) -> operations.DatastoreProjectsRollbackResponse:
        r"""Rolls back a transaction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.rollback_response = out

        return res

    
    def datastore_projects_run_aggregation_query(self, request: operations.DatastoreProjectsRunAggregationQueryRequest) -> operations.DatastoreProjectsRunAggregationQueryResponse:
        r"""Runs an aggregation query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:runAggregationQuery", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsRunAggregationQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunAggregationQueryResponse])
                res.run_aggregation_query_response = out

        return res

    
    def datastore_projects_run_query(self, request: operations.DatastoreProjectsRunQueryRequest) -> operations.DatastoreProjectsRunQueryResponse:
        r"""Queries for entities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/projects/{projectId}:runQuery", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastoreProjectsRunQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunQueryResponse])
                res.run_query_response = out

        return res

    