import requests
from typing import Optional
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

    
    def cloudfunctions_projects_locations_functions_create(self, request: operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse:
        r"""Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{parent}/functions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudfunctions_projects_locations_functions_delete(self, request: operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse:
        r"""Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudfunctions_projects_locations_functions_generate_download_url(self, request: operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURLRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURLResponse:
        r"""Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}:generateDownloadUrl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateDownloadURLResponse])
                res.generate_download_url_response = out

        return res

    
    def cloudfunctions_projects_locations_functions_generate_upload_url(self, request: operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURLRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURLResponse:
        r"""Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{parent}/functions:generateUploadUrl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateUploadURLResponse])
                res.generate_upload_url_response = out

        return res

    
    def cloudfunctions_projects_locations_functions_get_iam_policy(self, request: operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudfunctions_projects_locations_functions_list(self, request: operations.CloudfunctionsProjectsLocationsFunctionsListRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsListResponse:
        r"""Returns a list of functions that belong to the requested project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{parent}/functions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFunctionsResponse])
                res.list_functions_response = out

        return res

    
    def cloudfunctions_projects_locations_functions_patch(self, request: operations.CloudfunctionsProjectsLocationsFunctionsPatchRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsPatchResponse:
        r"""Updates existing function.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudfunctions_projects_locations_functions_set_iam_policy(self, request: operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudfunctions_projects_locations_functions_test_iam_permissions(self, request: operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest) -> operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def cloudfunctions_projects_locations_list(self, request: operations.CloudfunctionsProjectsLocationsListRequest) -> operations.CloudfunctionsProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def cloudfunctions_projects_locations_operations_get(self, request: operations.CloudfunctionsProjectsLocationsOperationsGetRequest) -> operations.CloudfunctionsProjectsLocationsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudfunctions_projects_locations_operations_list(self, request: operations.CloudfunctionsProjectsLocationsOperationsListRequest) -> operations.CloudfunctionsProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def cloudfunctions_projects_locations_runtimes_list(self, request: operations.CloudfunctionsProjectsLocationsRuntimesListRequest) -> operations.CloudfunctionsProjectsLocationsRuntimesListResponse:
        r"""Returns a list of runtimes that are supported for the requested project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2alpha/{parent}/runtimes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudfunctionsProjectsLocationsRuntimesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRuntimesResponse])
                res.list_runtimes_response = out

        return res

    