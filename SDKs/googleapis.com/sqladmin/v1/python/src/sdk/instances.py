import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Instances:
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

    
    def sql_instances_add_server_ca(self, request: operations.SQLInstancesAddServerCaRequest) -> operations.SQLInstancesAddServerCaResponse:
        r"""Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/addServerCa", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesAddServerCaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_clone(self, request: operations.SQLInstancesCloneRequest) -> operations.SQLInstancesCloneResponse:
        r"""Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesCloneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_delete(self, request: operations.SQLInstancesDeleteRequest) -> operations.SQLInstancesDeleteResponse:
        r"""Deletes a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_demote_master(self, request: operations.SQLInstancesDemoteMasterRequest) -> operations.SQLInstancesDemoteMasterResponse:
        r"""Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/demoteMaster", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesDemoteMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_export(self, request: operations.SQLInstancesExportRequest) -> operations.SQLInstancesExportResponse:
        r"""Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_failover(self, request: operations.SQLInstancesFailoverRequest) -> operations.SQLInstancesFailoverResponse:
        r"""Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/failover", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesFailoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_get(self, request: operations.SQLInstancesGetRequest) -> operations.SQLInstancesGetResponse:
        r"""Retrieves a resource containing information about a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatabaseInstance])
                res.database_instance = out

        return res

    
    def sql_instances_import(self, request: operations.SQLInstancesImportRequest) -> operations.SQLInstancesImportResponse:
        r"""Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_insert(self, request: operations.SQLInstancesInsertRequest) -> operations.SQLInstancesInsertResponse:
        r"""Creates a new Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_list(self, request: operations.SQLInstancesListRequest) -> operations.SQLInstancesListResponse:
        r"""Lists instances under a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstancesListResponse])
                res.instances_list_response = out

        return res

    
    def sql_instances_list_server_cas(self, request: operations.SQLInstancesListServerCasRequest) -> operations.SQLInstancesListServerCasResponse:
        r"""Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/listServerCas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesListServerCasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstancesListServerCasResponse])
                res.instances_list_server_cas_response = out

        return res

    
    def sql_instances_patch(self, request: operations.SQLInstancesPatchRequest) -> operations.SQLInstancesPatchResponse:
        r"""Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_promote_replica(self, request: operations.SQLInstancesPromoteReplicaRequest) -> operations.SQLInstancesPromoteReplicaResponse:
        r"""Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/promoteReplica", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesPromoteReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_reset_ssl_config(self, request: operations.SQLInstancesResetSslConfigRequest) -> operations.SQLInstancesResetSslConfigResponse:
        r"""Deletes all client certificates and generates a new server SSL certificate for the instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/resetSslConfig", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesResetSslConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_restart(self, request: operations.SQLInstancesRestartRequest) -> operations.SQLInstancesRestartResponse:
        r"""Restarts a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/restart", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesRestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_restore_backup(self, request: operations.SQLInstancesRestoreBackupRequest) -> operations.SQLInstancesRestoreBackupResponse:
        r"""Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/restoreBackup", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesRestoreBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_rotate_server_ca(self, request: operations.SQLInstancesRotateServerCaRequest) -> operations.SQLInstancesRotateServerCaResponse:
        r"""Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/rotateServerCa", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesRotateServerCaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_start_replica(self, request: operations.SQLInstancesStartReplicaRequest) -> operations.SQLInstancesStartReplicaResponse:
        r"""Starts the replication in the read replica instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/startReplica", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesStartReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_stop_replica(self, request: operations.SQLInstancesStopReplicaRequest) -> operations.SQLInstancesStopReplicaResponse:
        r"""Stops the replication in the read replica instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/stopReplica", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesStopReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_truncate_log(self, request: operations.SQLInstancesTruncateLogRequest) -> operations.SQLInstancesTruncateLogResponse:
        r"""Truncate MySQL general and slow query log tables MySQL only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/truncateLog", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesTruncateLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_instances_update(self, request: operations.SQLInstancesUpdateRequest) -> operations.SQLInstancesUpdateResponse:
        r"""Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLInstancesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    