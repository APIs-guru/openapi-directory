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

    
    def osconfig_projects_guest_policies_create(self, request: operations.OsconfigProjectsGuestPoliciesCreateRequest) -> operations.OsconfigProjectsGuestPoliciesCreateResponse:
        r"""Create an OS Config guest policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/guestPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsGuestPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuestPolicy])
                res.guest_policy = out

        return res

    
    def osconfig_projects_guest_policies_list(self, request: operations.OsconfigProjectsGuestPoliciesListRequest) -> operations.OsconfigProjectsGuestPoliciesListResponse:
        r"""Get a page of OS Config guest policies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/guestPolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsGuestPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGuestPoliciesResponse])
                res.list_guest_policies_response = out

        return res

    
    def osconfig_projects_patch_deployments_create(self, request: operations.OsconfigProjectsPatchDeploymentsCreateRequest) -> operations.OsconfigProjectsPatchDeploymentsCreateResponse:
        r"""Create an OS Config patch deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchDeployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    def osconfig_projects_patch_deployments_delete(self, request: operations.OsconfigProjectsPatchDeploymentsDeleteRequest) -> operations.OsconfigProjectsPatchDeploymentsDeleteResponse:
        r"""Delete an OS Config patch deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def osconfig_projects_patch_deployments_list(self, request: operations.OsconfigProjectsPatchDeploymentsListRequest) -> operations.OsconfigProjectsPatchDeploymentsListResponse:
        r"""Get a page of OS Config patch deployments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchDeployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchDeploymentsResponse])
                res.list_patch_deployments_response = out

        return res

    
    def osconfig_projects_patch_deployments_patch(self, request: operations.OsconfigProjectsPatchDeploymentsPatchRequest) -> operations.OsconfigProjectsPatchDeploymentsPatchResponse:
        r"""Update an OS Config patch deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    def osconfig_projects_patch_deployments_pause(self, request: operations.OsconfigProjectsPatchDeploymentsPauseRequest) -> operations.OsconfigProjectsPatchDeploymentsPauseResponse:
        r"""Change state of patch deployment to \"PAUSED\". Patch deployment in paused state doesn't generate patch jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}:pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    def osconfig_projects_patch_deployments_resume(self, request: operations.OsconfigProjectsPatchDeploymentsResumeRequest) -> operations.OsconfigProjectsPatchDeploymentsResumeResponse:
        r"""Change state of patch deployment back to \"ACTIVE\". Patch deployment in active state continues to generate patch jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}:resume", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    def osconfig_projects_patch_jobs_cancel(self, request: operations.OsconfigProjectsPatchJobsCancelRequest) -> operations.OsconfigProjectsPatchJobsCancelResponse:
        r"""Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    def osconfig_projects_patch_jobs_execute(self, request: operations.OsconfigProjectsPatchJobsExecuteRequest) -> operations.OsconfigProjectsPatchJobsExecuteResponse:
        r"""Patch VM instances by creating and running a patch job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchJobs:execute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsExecuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    def osconfig_projects_patch_jobs_get(self, request: operations.OsconfigProjectsPatchJobsGetRequest) -> operations.OsconfigProjectsPatchJobsGetResponse:
        r"""Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    def osconfig_projects_patch_jobs_instance_details_list(self, request: operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest) -> operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse:
        r"""Get a list of instance details for a given patch job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/instanceDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchJobInstanceDetailsResponse])
                res.list_patch_job_instance_details_response = out

        return res

    
    def osconfig_projects_patch_jobs_list(self, request: operations.OsconfigProjectsPatchJobsListRequest) -> operations.OsconfigProjectsPatchJobsListResponse:
        r"""Get a list of patch jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchJobsResponse])
                res.list_patch_jobs_response = out

        return res

    
    def osconfig_projects_zones_instances_lookup_effective_guest_policy(self, request: operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest) -> operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse:
        r"""Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{instance}:lookupEffectiveGuestPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EffectiveGuestPolicy])
                res.effective_guest_policy = out

        return res

    