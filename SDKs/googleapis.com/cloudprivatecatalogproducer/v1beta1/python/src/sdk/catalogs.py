import requests
from sdk.models import operations
from . import utils

class Catalogs:
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

    
    def cloudprivatecatalogproducer_catalogs_associations_create(self, request: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest) -> operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse:
        r"""Creates an Association instance under a given Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/associations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_associations_list(self, request: operations.CloudprivatecatalogproducerCatalogsAssociationsListRequest) -> operations.CloudprivatecatalogproducerCatalogsAssociationsListResponse:
        r"""Lists all Association resources under a catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/associations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsAssociationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_create(self, request: operations.CloudprivatecatalogproducerCatalogsCreateRequest) -> operations.CloudprivatecatalogproducerCatalogsCreateResponse:
        r"""Creates a new Catalog resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/catalogs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_get_iam_policy(self, request: operations.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest) -> operations.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse:
        r"""Gets IAM policy for the specified Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_list(self, request: operations.CloudprivatecatalogproducerCatalogsListRequest) -> operations.CloudprivatecatalogproducerCatalogsListResponse:
        r"""Lists Catalog resources that the producer has access to, within the
        scope of the parent resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/catalogs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_copy(self, request: operations.CloudprivatecatalogproducerCatalogsProductsCopyRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsCopyResponse:
        r"""Copies a Product under another Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:copy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_create(self, request: operations.CloudprivatecatalogproducerCatalogsProductsCreateRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsCreateResponse:
        r"""Creates a Product instance under a given Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/products", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_icons_upload(self, request: operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse:
        r"""Creates an Icon instance under a given Product.
        If Product only has a default icon, a new Icon
        instance is created and associated with the given Product.
        If Product already has a non-default icon, the action creates
        a new Icon instance, associates the newly created
        Icon with the given Product and deletes the old icon.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{product}/icons:upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_list(self, request: operations.CloudprivatecatalogproducerCatalogsProductsListRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsListResponse:
        r"""Lists Product resources that the producer has access to, within the
        scope of the parent catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_versions_create(self, request: operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse:
        r"""Creates a Version instance under a given Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_versions_delete(self, request: operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse:
        r"""Hard deletes a Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_versions_get(self, request: operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse:
        r"""Returns the requested Version resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_versions_list(self, request: operations.CloudprivatecatalogproducerCatalogsProductsVersionsListRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsVersionsListResponse:
        r"""Lists Version resources that the producer has access to, within the
        scope of the parent Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsProductsVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_products_versions_patch(self, request: operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest) -> operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse:
        r"""Updates a specific Version resource.
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

        res = operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_set_iam_policy(self, request: operations.CloudprivatecatalogproducerCatalogsSetIamPolicyRequest) -> operations.CloudprivatecatalogproducerCatalogsSetIamPolicyResponse:
        r"""Sets the IAM policy for the specified Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_test_iam_permissions(self, request: operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest) -> operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse:
        r"""Tests the IAM permissions for the specified Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalogproducer_catalogs_undelete(self, request: operations.CloudprivatecatalogproducerCatalogsUndeleteRequest) -> operations.CloudprivatecatalogproducerCatalogsUndeleteResponse:
        r"""Undeletes a deleted Catalog and all resources under it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:undelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogproducerCatalogsUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    