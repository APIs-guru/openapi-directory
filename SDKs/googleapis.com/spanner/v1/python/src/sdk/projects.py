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

    
    def spanner_projects_instance_config_operations_list(self, request: operations.SpannerProjectsInstanceConfigOperationsListRequest) -> operations.SpannerProjectsInstanceConfigOperationsListResponse:
        r"""Lists the user-managed instance config long-running operations in the given project. An instance config operation has a name of the form `projects//instanceConfigs//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instanceConfigOperations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstanceConfigOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstanceConfigOperationsResponse])
                res.list_instance_config_operations_response = out

        return res

    
    def spanner_projects_instance_configs_create(self, request: operations.SpannerProjectsInstanceConfigsCreateRequest) -> operations.SpannerProjectsInstanceConfigsCreateResponse:
        r"""Creates an instance config and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance config. The instance config name is assigned by the caller. If the named instance config already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns: * The instance config is readable via the API, with all requested attributes. The instance config's reconciling field is set to true. Its state is `CREATING`. While the operation is pending: * Cancelling the operation renders the instance config immediately unreadable via the API. * Except for deleting the creating resource, all other attempts to modify the instance config are rejected. Upon completion of the returned operation: * Instances can be created using the instance configuration. * The instance config's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance config. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instanceConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstanceConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instance_configs_list(self, request: operations.SpannerProjectsInstanceConfigsListRequest) -> operations.SpannerProjectsInstanceConfigsListResponse:
        r"""Lists the supported instance configurations for a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instanceConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstanceConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstanceConfigsResponse])
                res.list_instance_configs_response = out

        return res

    
    def spanner_projects_instances_backup_operations_list(self, request: operations.SpannerProjectsInstancesBackupOperationsListRequest) -> operations.SpannerProjectsInstancesBackupOperationsListResponse:
        r"""Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects//instances//backups//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/backupOperations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesBackupOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBackupOperationsResponse])
                res.list_backup_operations_response = out

        return res

    
    def spanner_projects_instances_backups_copy(self, request: operations.SpannerProjectsInstancesBackupsCopyRequest) -> operations.SpannerProjectsInstancesBackupsCopyResponse:
        r"""Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/backups:copy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesBackupsCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_backups_create(self, request: operations.SpannerProjectsInstancesBackupsCreateRequest) -> operations.SpannerProjectsInstancesBackupsCreateResponse:
        r"""Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/backups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesBackupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_backups_list(self, request: operations.SpannerProjectsInstancesBackupsListRequest) -> operations.SpannerProjectsInstancesBackupsListResponse:
        r"""Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/backups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesBackupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBackupsResponse])
                res.list_backups_response = out

        return res

    
    def spanner_projects_instances_backups_patch(self, request: operations.SpannerProjectsInstancesBackupsPatchRequest) -> operations.SpannerProjectsInstancesBackupsPatchResponse:
        r"""Updates a pending or completed Backup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesBackupsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Backup])
                res.backup = out

        return res

    
    def spanner_projects_instances_create(self, request: operations.SpannerProjectsInstancesCreateRequest) -> operations.SpannerProjectsInstancesCreateResponse:
        r"""Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_database_operations_list(self, request: operations.SpannerProjectsInstancesDatabaseOperationsListRequest) -> operations.SpannerProjectsInstancesDatabaseOperationsListResponse:
        r"""Lists database longrunning-operations. A database operation has a name of the form `projects//instances//databases//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/databaseOperations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabaseOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDatabaseOperationsResponse])
                res.list_database_operations_response = out

        return res

    
    def spanner_projects_instances_databases_create(self, request: operations.SpannerProjectsInstancesDatabasesCreateRequest) -> operations.SpannerProjectsInstancesDatabasesCreateResponse:
        r"""Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/databases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_databases_database_roles_list(self, request: operations.SpannerProjectsInstancesDatabasesDatabaseRolesListRequest) -> operations.SpannerProjectsInstancesDatabasesDatabaseRolesListResponse:
        r"""Lists Cloud Spanner database roles.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/databaseRoles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesDatabaseRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDatabaseRolesResponse])
                res.list_database_roles_response = out

        return res

    
    def spanner_projects_instances_databases_database_roles_test_iam_permissions(self, request: operations.SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest) -> operations.SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse:
        r"""Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def spanner_projects_instances_databases_drop_database(self, request: operations.SpannerProjectsInstancesDatabasesDropDatabaseRequest) -> operations.SpannerProjectsInstancesDatabasesDropDatabaseResponse:
        r"""Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesDropDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def spanner_projects_instances_databases_get_ddl(self, request: operations.SpannerProjectsInstancesDatabasesGetDdlRequest) -> operations.SpannerProjectsInstancesDatabasesGetDdlResponse:
        r"""Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}/ddl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesGetDdlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDatabaseDdlResponse])
                res.get_database_ddl_response = out

        return res

    
    def spanner_projects_instances_databases_get_iam_policy(self, request: operations.SpannerProjectsInstancesDatabasesGetIamPolicyRequest) -> operations.SpannerProjectsInstancesDatabasesGetIamPolicyResponse:
        r"""Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def spanner_projects_instances_databases_get_scans(self, request: operations.SpannerProjectsInstancesDatabasesGetScansRequest) -> operations.SpannerProjectsInstancesDatabasesGetScansResponse:
        r"""Request a specific scan with Database-specific data for Cloud Key Visualizer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/scans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesGetScansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scan])
                res.scan = out

        return res

    
    def spanner_projects_instances_databases_list(self, request: operations.SpannerProjectsInstancesDatabasesListRequest) -> operations.SpannerProjectsInstancesDatabasesListResponse:
        r"""Lists Cloud Spanner databases.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/databases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDatabasesResponse])
                res.list_databases_response = out

        return res

    
    def spanner_projects_instances_databases_restore(self, request: operations.SpannerProjectsInstancesDatabasesRestoreRequest) -> operations.SpannerProjectsInstancesDatabasesRestoreResponse:
        r"""Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/databases:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_databases_sessions_batch_create(self, request: operations.SpannerProjectsInstancesDatabasesSessionsBatchCreateRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsBatchCreateResponse:
        r"""Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}/sessions:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreateSessionsResponse])
                res.batch_create_sessions_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_begin_transaction(self, request: operations.SpannerProjectsInstancesDatabasesSessionsBeginTransactionRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsBeginTransactionResponse:
        r"""Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:beginTransaction", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsBeginTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Transaction])
                res.transaction = out

        return res

    
    def spanner_projects_instances_databases_sessions_commit(self, request: operations.SpannerProjectsInstancesDatabasesSessionsCommitRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsCommitResponse:
        r"""Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:commit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitResponse])
                res.commit_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_create(self, request: operations.SpannerProjectsInstancesDatabasesSessionsCreateRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsCreateResponse:
        r"""Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it is a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner may delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `\"SELECT 1\"`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}/sessions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Session])
                res.session = out

        return res

    
    def spanner_projects_instances_databases_sessions_execute_batch_dml(self, request: operations.SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse:
        r"""Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:executeBatchDml", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteBatchDmlResponse])
                res.execute_batch_dml_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_execute_sql(self, request: operations.SpannerProjectsInstancesDatabasesSessionsExecuteSQLRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsExecuteSQLResponse:
        r"""Executes an SQL statement, returning all results in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:executeSql", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsExecuteSQLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResultSet])
                res.result_set = out

        return res

    
    def spanner_projects_instances_databases_sessions_execute_streaming_sql(self, request: operations.SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLResponse:
        r"""Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:executeStreamingSql", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialResultSet])
                res.partial_result_set = out

        return res

    
    def spanner_projects_instances_databases_sessions_list(self, request: operations.SpannerProjectsInstancesDatabasesSessionsListRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsListResponse:
        r"""Lists all sessions in a given database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}/sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSessionsResponse])
                res.list_sessions_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_partition_query(self, request: operations.SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse:
        r"""Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the PartitionQueryRequest used to create the partition tokens and the ExecuteSqlRequests that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the query, and the whole operation must be restarted from the beginning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:partitionQuery", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartitionResponse])
                res.partition_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_partition_read(self, request: operations.SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse:
        r"""Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the PartitionReadRequest used to create the partition tokens and the ReadRequests that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual StreamingRead call issued with a partition_token. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the read, and the whole operation must be restarted from the beginning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:partitionRead", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartitionResponse])
                res.partition_response = out

        return res

    
    def spanner_projects_instances_databases_sessions_read(self, request: operations.SpannerProjectsInstancesDatabasesSessionsReadRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsReadResponse:
        r"""Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:read", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResultSet])
                res.result_set = out

        return res

    
    def spanner_projects_instances_databases_sessions_rollback(self, request: operations.SpannerProjectsInstancesDatabasesSessionsRollbackRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsRollbackResponse:
        r"""Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def spanner_projects_instances_databases_sessions_streaming_read(self, request: operations.SpannerProjectsInstancesDatabasesSessionsStreamingReadRequest) -> operations.SpannerProjectsInstancesDatabasesSessionsStreamingReadResponse:
        r"""Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{session}:streamingRead", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSessionsStreamingReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialResultSet])
                res.partial_result_set = out

        return res

    
    def spanner_projects_instances_databases_set_iam_policy(self, request: operations.SpannerProjectsInstancesDatabasesSetIamPolicyRequest) -> operations.SpannerProjectsInstancesDatabasesSetIamPolicyResponse:
        r"""Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def spanner_projects_instances_databases_update_ddl(self, request: operations.SpannerProjectsInstancesDatabasesUpdateDdlRequest) -> operations.SpannerProjectsInstancesDatabasesUpdateDdlResponse:
        r"""Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `/operations/` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{database}/ddl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesDatabasesUpdateDdlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def spanner_projects_instances_list(self, request: operations.SpannerProjectsInstancesListRequest) -> operations.SpannerProjectsInstancesListResponse:
        r"""Lists all instances in the given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstancesResponse])
                res.list_instances_response = out

        return res

    
    def spanner_projects_instances_operations_cancel(self, request: operations.SpannerProjectsInstancesOperationsCancelRequest) -> operations.SpannerProjectsInstancesOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def spanner_projects_instances_operations_delete(self, request: operations.SpannerProjectsInstancesOperationsDeleteRequest) -> operations.SpannerProjectsInstancesOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def spanner_projects_instances_operations_list(self, request: operations.SpannerProjectsInstancesOperationsListRequest) -> operations.SpannerProjectsInstancesOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SpannerProjectsInstancesOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    