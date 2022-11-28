import requests
from sdk.models import operations
from . import utils

class AttributeNamespaces:
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

    
    def delete_attribute_namespace_(self, request: operations.DeleteAttributeNamespaceRequest) -> operations.DeleteAttributeNamespaceResponse:
        r"""Delete an attribute namespace and all attributes below.
        Delete an attribute namespace and all attributes below.
        
        This operation is the same as the one defined with [DELETE /attribute/{namespace}/_meta](#/Attributes/delete_attribute__namespace___meta).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttributeNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def delete_attribute_namespace_meta(self, request: operations.DeleteAttributeNamespaceMetaRequest) -> operations.DeleteAttributeNamespaceMetaResponse:
        r"""Delete an attribute namespace and all attributes below.
        Delete an attribute namespace and all attributes below.
        
        This operation is the same as the one defined with [DELETE /attribute/{namespace}](#/Attributes/delete_attribute__namespace_).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/_meta", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttributeNamespaceMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_attribute(self, request: operations.GetAttributeRequest) -> operations.GetAttributeResponse:
        r"""List all attribute namespaces.
        List all attribute namespaces.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/attribute"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_attribute_namespace_(self, request: operations.GetAttributeNamespaceRequest) -> operations.GetAttributeNamespaceResponse:
        r"""List all attributes below a namespace.
        List all attributes under a given attribute namespace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributeNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_attribute_namespace_meta(self, request: operations.GetAttributeNamespaceMetaRequest) -> operations.GetAttributeNamespaceMetaResponse:
        r"""Show attribute namespace.
        Shows attribute namespace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/_meta", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributeNamespaceMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_attribute_namespace_meta(self, request: operations.PostAttributeNamespaceMetaRequest) -> operations.PostAttributeNamespaceMetaResponse:
        r"""Change attribute namespace. Create an attribute namespace if it doesn't exist.
        This endpoint can be used for both, creating an attribute namespace and updating it:
          * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
          * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
        
        This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___meta).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/_meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttributeNamespaceMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def put_attribute_namespace_meta(self, request: operations.PutAttributeNamespaceMetaRequest) -> operations.PutAttributeNamespaceMetaResponse:
        r"""Change attribute namespace. Create an attribute namespace if it doesn't exist.
        This endpoint can be used for both, creating an attribute namespace and updating it:
          * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
          * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
        
        This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___meta).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/_meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAttributeNamespaceMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    