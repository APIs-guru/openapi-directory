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

    
    def dataplex_projects_locations_data_scans_create(self, request: operations.DataplexProjectsLocationsDataScansCreateRequest) -> operations.DataplexProjectsLocationsDataScansCreateResponse:
        r"""Creates a dataScan resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dataScans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsDataScansCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_data_scans_list(self, request: operations.DataplexProjectsLocationsDataScansListRequest) -> operations.DataplexProjectsLocationsDataScansListResponse:
        r"""Lists dataScans.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dataScans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsDataScansListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListDataScansResponse])
                res.google_cloud_dataplex_v1_list_data_scans_response = out

        return res

    
    def dataplex_projects_locations_data_scans_run(self, request: operations.DataplexProjectsLocationsDataScansRunRequest) -> operations.DataplexProjectsLocationsDataScansRunResponse:
        r"""Run an on demand execution of a DataScan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsDataScansRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1RunDataScanResponse])
                res.google_cloud_dataplex_v1_run_data_scan_response = out

        return res

    
    def dataplex_projects_locations_lakes_content_create(self, request: operations.DataplexProjectsLocationsLakesContentCreateRequest) -> operations.DataplexProjectsLocationsLakesContentCreateResponse:
        r"""Create a content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/content", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesContentCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1Content])
                res.google_cloud_dataplex_v1_content = out

        return res

    
    def dataplex_projects_locations_lakes_content_list(self, request: operations.DataplexProjectsLocationsLakesContentListRequest) -> operations.DataplexProjectsLocationsLakesContentListResponse:
        r"""List content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesContentListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListContentResponse])
                res.google_cloud_dataplex_v1_list_content_response = out

        return res

    
    def dataplex_projects_locations_lakes_contentitems_create(self, request: operations.DataplexProjectsLocationsLakesContentitemsCreateRequest) -> operations.DataplexProjectsLocationsLakesContentitemsCreateResponse:
        r"""Create a content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/contentitems", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesContentitemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1Content])
                res.google_cloud_dataplex_v1_content = out

        return res

    
    def dataplex_projects_locations_lakes_contentitems_list(self, request: operations.DataplexProjectsLocationsLakesContentitemsListRequest) -> operations.DataplexProjectsLocationsLakesContentitemsListResponse:
        r"""List content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/contentitems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesContentitemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListContentResponse])
                res.google_cloud_dataplex_v1_list_content_response = out

        return res

    
    def dataplex_projects_locations_lakes_create(self, request: operations.DataplexProjectsLocationsLakesCreateRequest) -> operations.DataplexProjectsLocationsLakesCreateResponse:
        r"""Creates a lake resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/lakes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_environments_create(self, request: operations.DataplexProjectsLocationsLakesEnvironmentsCreateRequest) -> operations.DataplexProjectsLocationsLakesEnvironmentsCreateResponse:
        r"""Create an environment resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_environments_list(self, request: operations.DataplexProjectsLocationsLakesEnvironmentsListRequest) -> operations.DataplexProjectsLocationsLakesEnvironmentsListResponse:
        r"""Lists environments under the given lake.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListEnvironmentsResponse])
                res.google_cloud_dataplex_v1_list_environments_response = out

        return res

    
    def dataplex_projects_locations_lakes_environments_sessions_list(self, request: operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest) -> operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse:
        r"""Lists session resources in an environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListSessionsResponse])
                res.google_cloud_dataplex_v1_list_sessions_response = out

        return res

    
    def dataplex_projects_locations_lakes_list(self, request: operations.DataplexProjectsLocationsLakesListRequest) -> operations.DataplexProjectsLocationsLakesListResponse:
        r"""Lists lake resources in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/lakes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListLakesResponse])
                res.google_cloud_dataplex_v1_list_lakes_response = out

        return res

    
    def dataplex_projects_locations_lakes_tasks_create(self, request: operations.DataplexProjectsLocationsLakesTasksCreateRequest) -> operations.DataplexProjectsLocationsLakesTasksCreateResponse:
        r"""Creates a task resource within a lake.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tasks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesTasksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_tasks_jobs_list(self, request: operations.DataplexProjectsLocationsLakesTasksJobsListRequest) -> operations.DataplexProjectsLocationsLakesTasksJobsListResponse:
        r"""Lists Jobs under the given task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesTasksJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListJobsResponse])
                res.google_cloud_dataplex_v1_list_jobs_response = out

        return res

    
    def dataplex_projects_locations_lakes_tasks_list(self, request: operations.DataplexProjectsLocationsLakesTasksListRequest) -> operations.DataplexProjectsLocationsLakesTasksListResponse:
        r"""Lists tasks under the given lake.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesTasksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListTasksResponse])
                res.google_cloud_dataplex_v1_list_tasks_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_actions_list(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsActionsListRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsActionsListResponse:
        r"""Lists action resources in an asset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesAssetsActionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListActionsResponse])
                res.google_cloud_dataplex_v1_list_actions_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_create(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsCreateRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsCreateResponse:
        r"""Creates an asset resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesAssetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_get_iam_policy(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_list(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsListRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsListResponse:
        r"""Lists asset resources in a zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesAssetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListAssetsResponse])
                res.google_cloud_dataplex_v1_list_assets_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_patch(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsPatchRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsPatchResponse:
        r"""Updates an asset resource.
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

        res = operations.DataplexProjectsLocationsLakesZonesAssetsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_set_iam_policy(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
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

        res = operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def dataplex_projects_locations_lakes_zones_assets_test_iam_permissions(self, request: operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest) -> operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
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

        res = operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_create(self, request: operations.DataplexProjectsLocationsLakesZonesCreateRequest) -> operations.DataplexProjectsLocationsLakesZonesCreateResponse:
        r"""Creates a zone resource within a lake.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/zones", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_lakes_zones_entities_create(self, request: operations.DataplexProjectsLocationsLakesZonesEntitiesCreateRequest) -> operations.DataplexProjectsLocationsLakesZonesEntitiesCreateResponse:
        r"""Create a metadata entity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesEntitiesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1Entity])
                res.google_cloud_dataplex_v1_entity = out

        return res

    
    def dataplex_projects_locations_lakes_zones_entities_list(self, request: operations.DataplexProjectsLocationsLakesZonesEntitiesListRequest) -> operations.DataplexProjectsLocationsLakesZonesEntitiesListResponse:
        r"""List metadata entities in a zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesEntitiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListEntitiesResponse])
                res.google_cloud_dataplex_v1_list_entities_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_entities_partitions_create(self, request: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest) -> operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse:
        r"""Create a metadata partition.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/partitions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1Partition])
                res.google_cloud_dataplex_v1_partition = out

        return res

    
    def dataplex_projects_locations_lakes_zones_entities_partitions_list(self, request: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest) -> operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse:
        r"""List metadata partitions of an entity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/partitions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListPartitionsResponse])
                res.google_cloud_dataplex_v1_list_partitions_response = out

        return res

    
    def dataplex_projects_locations_lakes_zones_entities_update(self, request: operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest) -> operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse:
        r"""Update a metadata entity. Only supports full resource update.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1Entity])
                res.google_cloud_dataplex_v1_entity = out

        return res

    
    def dataplex_projects_locations_lakes_zones_list(self, request: operations.DataplexProjectsLocationsLakesZonesListRequest) -> operations.DataplexProjectsLocationsLakesZonesListResponse:
        r"""Lists zone resources in a lake.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/zones", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsLakesZonesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDataplexV1ListZonesResponse])
                res.google_cloud_dataplex_v1_list_zones_response = out

        return res

    
    def dataplex_projects_locations_list(self, request: operations.DataplexProjectsLocationsListRequest) -> operations.DataplexProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudLocationListLocationsResponse])
                res.google_cloud_location_list_locations_response = out

        return res

    
    def dataplex_projects_locations_operations_cancel(self, request: operations.DataplexProjectsLocationsOperationsCancelRequest) -> operations.DataplexProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
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

        res = operations.DataplexProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def dataplex_projects_locations_operations_delete(self, request: operations.DataplexProjectsLocationsOperationsDeleteRequest) -> operations.DataplexProjectsLocationsOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def dataplex_projects_locations_operations_get(self, request: operations.DataplexProjectsLocationsOperationsGetRequest) -> operations.DataplexProjectsLocationsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dataplex_projects_locations_operations_list(self, request: operations.DataplexProjectsLocationsOperationsListRequest) -> operations.DataplexProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as \"/v1/{name=users/*}/operations\" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataplexProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    