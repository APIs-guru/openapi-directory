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

    
    def servicedirectory_projects_locations_list(self, request: operations.ServicedirectoryProjectsLocationsListRequest) -> operations.ServicedirectoryProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def servicedirectory_projects_locations_namespaces_create(self, request: operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse:
        r"""Creates a namespace, and returns the new namespace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/namespaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out

        return res

    
    def servicedirectory_projects_locations_namespaces_list(self, request: operations.ServicedirectoryProjectsLocationsNamespacesListRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesListResponse:
        r"""Lists all namespaces.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/namespaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNamespacesResponse])
                res.list_namespaces_response = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_create(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse:
        r"""Creates a service, and returns the new service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/services", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_endpoints_create(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse:
        r"""Creates an endpoint, and returns the new endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/endpoints", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Endpoint])
                res.endpoint = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_endpoints_delete(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse:
        r"""Deletes an endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_endpoints_get(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse:
        r"""Gets an endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Endpoint])
                res.endpoint = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_endpoints_list(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse:
        r"""Lists all endpoints.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/endpoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEndpointsResponse])
                res.list_endpoints_response = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_endpoints_patch(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse:
        r"""Updates an endpoint.
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

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Endpoint])
                res.endpoint = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_get_iam_policy(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse:
        r"""Gets the IAM Policy for a resource (namespace or service only).
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

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_list(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse:
        r"""Lists all services belonging to a namespace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_resolve(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse:
        r"""Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:resolve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResolveServiceResponse])
                res.resolve_service_response = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_set_iam_policy(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse:
        r"""Sets the IAM Policy for a resource (namespace or service only).
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

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def servicedirectory_projects_locations_namespaces_services_test_iam_permissions(self, request: operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest) -> operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse:
        r"""Tests IAM permissions for a resource (namespace or service only).
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

        res = operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    