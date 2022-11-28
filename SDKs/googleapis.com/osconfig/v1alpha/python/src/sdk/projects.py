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

    
    def osconfig_projects_locations_instance_os_policies_compliances_list(self, request: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest) -> operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse:
        r"""List OS policies compliance data for all Compute Engine VM instances in the specified zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/instanceOSPoliciesCompliances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstanceOsPoliciesCompliancesResponse])
                res.list_instance_os_policies_compliances_response = out

        return res

    
    def osconfig_projects_locations_instances_inventories_list(self, request: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest) -> operations.OsconfigProjectsLocationsInstancesInventoriesListResponse:
        r"""List inventory data for all VM instances in the specified zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/inventories", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/reports", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/vulnerabilityReports", request.path_params)
        
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
        r"""Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/osPolicyAssignments", request.path_params)
        
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

    
    def osconfig_projects_locations_os_policy_assignments_delete(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse:
        r"""Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_list(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse:
        r"""List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/osPolicyAssignments", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:listRevisions", request.path_params)
        
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

    
    def osconfig_projects_locations_os_policy_assignments_operations_cancel(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_operations_get(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def osconfig_projects_locations_os_policy_assignments_patch(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse:
        r"""Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    