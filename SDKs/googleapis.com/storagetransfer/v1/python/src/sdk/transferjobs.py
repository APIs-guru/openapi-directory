import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class TransferJobs:
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

    
    def storagetransfer_transfer_jobs_create(self, request: operations.StoragetransferTransferJobsCreateRequest) -> operations.StoragetransferTransferJobsCreateResponse:
        r"""Creates a transfer job that runs periodically.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/transferJobs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferJob])
                res.transfer_job = out

        return res

    
    def storagetransfer_transfer_jobs_delete(self, request: operations.StoragetransferTransferJobsDeleteRequest) -> operations.StoragetransferTransferJobsDeleteResponse:
        r"""Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{jobName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def storagetransfer_transfer_jobs_get(self, request: operations.StoragetransferTransferJobsGetRequest) -> operations.StoragetransferTransferJobsGetResponse:
        r"""Gets a transfer job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{jobName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferJob])
                res.transfer_job = out

        return res

    
    def storagetransfer_transfer_jobs_list(self, request: operations.StoragetransferTransferJobsListRequest) -> operations.StoragetransferTransferJobsListResponse:
        r"""Lists transfer jobs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/transferJobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferJobsResponse])
                res.list_transfer_jobs_response = out

        return res

    
    def storagetransfer_transfer_jobs_patch(self, request: operations.StoragetransferTransferJobsPatchRequest) -> operations.StoragetransferTransferJobsPatchResponse:
        r"""Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{jobName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferJob])
                res.transfer_job = out

        return res

    
    def storagetransfer_transfer_jobs_run(self, request: operations.StoragetransferTransferJobsRunRequest) -> operations.StoragetransferTransferJobsRunResponse:
        r"""Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{jobName}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoragetransferTransferJobsRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    