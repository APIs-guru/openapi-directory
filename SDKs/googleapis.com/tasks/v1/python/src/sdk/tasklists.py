import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tasklists:
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

    
    def tasks_tasklists_delete(self, request: operations.TasksTasklistsDeleteRequest) -> operations.TasksTasklistsDeleteResponse:
        r"""Deletes the authenticated user's specified task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/users/@me/lists/{tasklist}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tasks_tasklists_get(self, request: operations.TasksTasklistsGetRequest) -> operations.TasksTasklistsGetResponse:
        r"""Returns the authenticated user's specified task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/users/@me/lists/{tasklist}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskList])
                res.task_list = out

        return res

    
    def tasks_tasklists_insert(self, request: operations.TasksTasklistsInsertRequest) -> operations.TasksTasklistsInsertResponse:
        r"""Creates a new task list and adds it to the authenticated user's task lists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tasks/v1/users/@me/lists"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskList])
                res.task_list = out

        return res

    
    def tasks_tasklists_list(self, request: operations.TasksTasklistsListRequest) -> operations.TasksTasklistsListResponse:
        r"""Returns all the authenticated user's task lists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tasks/v1/users/@me/lists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskLists])
                res.task_lists = out

        return res

    
    def tasks_tasklists_patch(self, request: operations.TasksTasklistsPatchRequest) -> operations.TasksTasklistsPatchResponse:
        r"""Updates the authenticated user's specified task list. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/users/@me/lists/{tasklist}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskList])
                res.task_list = out

        return res

    
    def tasks_tasklists_update(self, request: operations.TasksTasklistsUpdateRequest) -> operations.TasksTasklistsUpdateResponse:
        r"""Updates the authenticated user's specified task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/users/@me/lists/{tasklist}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasklistsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskList])
                res.task_list = out

        return res

    