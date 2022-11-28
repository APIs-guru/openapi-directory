import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BackupRuns:
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

    
    def sql_backup_runs_delete(self, request: operations.SQLBackupRunsDeleteRequest) -> operations.SQLBackupRunsDeleteResponse:
        r"""Deletes the backup taken by a backup run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLBackupRunsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_backup_runs_get(self, request: operations.SQLBackupRunsGetRequest) -> operations.SQLBackupRunsGetResponse:
        r"""Retrieves a resource containing information about a backup run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLBackupRunsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BackupRun])
                res.backup_run = out

        return res

    
    def sql_backup_runs_insert(self, request: operations.SQLBackupRunsInsertRequest) -> operations.SQLBackupRunsInsertResponse:
        r"""Creates a new backup run on demand.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLBackupRunsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_backup_runs_list(self, request: operations.SQLBackupRunsListRequest) -> operations.SQLBackupRunsListResponse:
        r"""Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLBackupRunsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BackupRunsListResponse])
                res.backup_runs_list_response = out

        return res

    