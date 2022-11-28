import requests
from sdk.models import operations
from . import utils

class Attributes:
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

    
    def delete_attribute_namespace_attribute_name_(self, request: operations.DeleteAttributeNamespaceAttributeNameRequest) -> operations.DeleteAttributeNamespaceAttributeNameResponse:
        r"""Delete an attribute and all its values in projects or packages.
        Delete an attribute and all its values in projects or packages.
        
        This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}/_meta](#/Attributes/delete_attribute__namespace___attribute_name___meta)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/{attribute_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttributeNamespaceAttributeNameResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_attribute_namespace_attribute_name_meta(self, request: operations.DeleteAttributeNamespaceAttributeNameMetaRequest) -> operations.DeleteAttributeNamespaceAttributeNameMetaResponse:
        r"""Delete an attribute and all its values in projects or packages.
        Delete an attribute and all its values in projects or packages.
        
        This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}](#/Attributes/delete_attribute__namespace___attribute_name_)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/{attribute_name}/_meta", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttributeNamespaceAttributeNameMetaResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_attribute_namespace_attribute_name_meta(self, request: operations.GetAttributeNamespaceAttributeNameMetaRequest) -> operations.GetAttributeNamespaceAttributeNameMetaResponse:
        r"""Shows attribute.
        Shows attribute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/{attribute_name}/_meta", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributeNamespaceAttributeNameMetaResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_attribute_namespace_attribute_name_meta(self, request: operations.PostAttributeNamespaceAttributeNameMetaRequest) -> operations.PostAttributeNamespaceAttributeNameMetaResponse:
        r"""Change attribute data. Create an attribute if it doesn't exist.
        This endpoint can be used for both, creating an attribute and updating it:
          * If the attribute passed as parameter doesn't exist, it will create the attribute.
          * If the attribute passed as parameter already exists, it will update the attribute.
        
        This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___attribute_name___meta).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/{attribute_name}/_meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttributeNamespaceAttributeNameMetaResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def put_attribute_namespace_attribute_name_meta(self, request: operations.PutAttributeNamespaceAttributeNameMetaRequest) -> operations.PutAttributeNamespaceAttributeNameMetaResponse:
        r"""Change attribute data. Create an attribute if it doesn't exist.
        This endpoint can be used for both, creating an attribute and updating it:
          * If the attribute passed as parameter doesn't exist, it will create the attribute.
          * If the attribute passed as parameter already exists, it will update the attribute.
        
        This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___attribute_name___meta).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attribute/{namespace}/{attribute_name}/_meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAttributeNamespaceAttributeNameMetaResponse(status_code=r.status_code, content_type=content_type)
        
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

    