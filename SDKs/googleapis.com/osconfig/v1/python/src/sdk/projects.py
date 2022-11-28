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

    
    def osconfig_projects_locations_instances_inventories_list(self, request: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest) -> operations.OsconfigProjectsLocationsInstancesInventoriesListResponse:
        r"""List inventory data for all VM instances in the specified zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/inventories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesInventoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventoriesResponse])
                res.list_inventories_response = out

        return res

    
    def osconfig_projects_locations_instances_os_policy_assignments_reports_list(self, request: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest) -> operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse:
        r"""List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentReportsResponse])
                res.list_os_policy_assignment_reports_response = out

        return res

    
    def osconfig_projects_locations_instances_vulnerability_reports_list(self, request: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest) -> operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse:
        r"""List vulnerability reports for all VM instances in the specified zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/vulnerabilityReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVulnerabilityReportsResponse])
                res.list_vulnerability_reports_response = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_create(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse:
        r"""Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/osPolicyAssignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_list(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse:
        r"""List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/osPolicyAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentsResponse])
                res.list_os_policy_assignments_response = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_list_revisions(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse:
        r"""List the OS policy assignment revisions for a given OS policy assignment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentRevisionsResponse])
                res.list_os_policy_assignment_revisions_response = out

        return res

    
    def osconfig_projects_patch_deployments_create(self, request: operations.OsconfigProjectsPatchDeploymentsCreateRequest) -> operations.OsconfigProjectsPatchDeploymentsCreateResponse:
        r"""Create an OS Config patch deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/patchDeployments", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{parent}/patchDeployments", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}:pause", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}:resume", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{parent}/patchJobs:execute", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{parent}/instanceDetails", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{parent}/patchJobs", request.path_params)
        
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

    