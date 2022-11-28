import requests
from sdk.models import operations
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

    
    def servicebroker_projects_brokers_create(self, request: operations.ServicebrokerProjectsBrokersCreateRequest) -> operations.ServicebrokerProjectsBrokersCreateResponse:
        r"""CreateBroker creates a Broker.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/brokers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_instances_bindings_list(self, request: operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest) -> operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse:
        r"""Lists all the bindings in the instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/bindings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_instances_list(self, request: operations.ServicebrokerProjectsBrokersInstancesListRequest) -> operations.ServicebrokerProjectsBrokersInstancesListResponse:
        r"""Lists all the instances in the brokers
        This API is an extension and not part of the OSB spec.
        Hence the path is a standard Google API URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_list(self, request: operations.ServicebrokerProjectsBrokersListRequest) -> operations.ServicebrokerProjectsBrokersListResponse:
        r"""ListBrokers lists brokers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/brokers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_catalog_list(self, request: operations.ServicebrokerProjectsBrokersV2CatalogListRequest) -> operations.ServicebrokerProjectsBrokersV2CatalogListResponse:
        r"""Lists all the Services registered with this broker for consumption for
        given service registry broker, which contains an set of services.
        Note, that Service producer API is separate from Broker API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/v2/catalog", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2CatalogListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_create(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse:
        r"""Provisions a service instance.
        If `request.accepts_incomplete` is false and Broker cannot execute request
        synchronously HTTP 422 error will be returned along with
        FAILED_PRECONDITION status.
        If `request.accepts_incomplete` is true and the Broker decides to execute
        resource asynchronously then HTTP 202 response code will be returned and a
        valid polling operation in the response will be included.
        If Broker executes the request synchronously and it succeeds HTTP 201
        response will be furnished.
        If identical instance exists, then HTTP 200 response will be returned.
        If an instance with identical ID but mismatching parameters exists, then
        HTTP 409 status code will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/v2/service_instances/{instance_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_patch(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse:
        r"""Updates an existing service instance.
        See CreateServiceInstance for possible response codes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_service_bindings_create(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse:
        r"""CreateBinding generates a service binding to an existing service instance.
        See ProviServiceInstance for async operation details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/service_bindings/{binding_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_service_bindings_delete(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse:
        r"""Unbinds from a service instance.
        For synchronous/asynchronous request details see CreateServiceInstance
        method.
        If binding does not exist HTTP 410 status will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_service_bindings_get(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse:
        r"""GetBinding returns the binding information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation(self, request: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest) -> operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse:
        r"""Returns the state of the last operation for the binding.
        Only last (or current) operation can be polled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}/last_operation", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    