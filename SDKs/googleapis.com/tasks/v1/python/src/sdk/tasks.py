import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tasks:
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

    
    def tasks_tasks_clear(self, request: operations.TasksTasksClearRequest) -> operations.TasksTasksClearResponse:
        r"""Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/clear", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tasks_tasks_delete(self, request: operations.TasksTasksDeleteRequest) -> operations.TasksTasksDeleteResponse:
        r"""Deletes the specified task from the task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks/{task}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tasks_tasks_get(self, request: operations.TasksTasksGetRequest) -> operations.TasksTasksGetResponse:
        r"""Returns the specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks/{task}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def tasks_tasks_insert(self, request: operations.TasksTasksInsertRequest) -> operations.TasksTasksInsertResponse:
        r"""Creates a new task on the specified task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def tasks_tasks_list(self, request: operations.TasksTasksListRequest) -> operations.TasksTasksListResponse:
        r"""Returns all tasks in the specified task list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tasks])
                res.tasks = out

        return res

    
    def tasks_tasks_move(self, request: operations.TasksTasksMoveRequest) -> operations.TasksTasksMoveResponse:
        r"""Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks/{task}/move", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def tasks_tasks_patch(self, request: operations.TasksTasksPatchRequest) -> operations.TasksTasksPatchResponse:
        r"""Updates the specified task. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks/{task}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def tasks_tasks_update(self, request: operations.TasksTasksUpdateRequest) -> operations.TasksTasksUpdateResponse:
        r"""Updates the specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tasks/v1/lists/{tasklist}/tasks/{task}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TasksTasksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    