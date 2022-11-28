import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SslCerts:
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

    
    def sql_ssl_certs_create_ephemeral(self, request: operations.SQLSslCertsCreateEphemeralRequest) -> operations.SQLSslCertsCreateEphemeralResponse:
        r"""Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLSslCertsCreateEphemeralResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCert])
                res.ssl_cert = out

        return res

    
    def sql_ssl_certs_delete(self, request: operations.SQLSslCertsDeleteRequest) -> operations.SQLSslCertsDeleteResponse:
        r"""Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLSslCertsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_ssl_certs_get(self, request: operations.SQLSslCertsGetRequest) -> operations.SQLSslCertsGetResponse:
        r"""Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLSslCertsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCert])
                res.ssl_cert = out

        return res

    
    def sql_ssl_certs_insert(self, request: operations.SQLSslCertsInsertRequest) -> operations.SQLSslCertsInsertResponse:
        r"""Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLSslCertsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCertsInsertResponse])
                res.ssl_certs_insert_response = out

        return res

    
    def sql_ssl_certs_list(self, request: operations.SQLSslCertsListRequest) -> operations.SQLSslCertsListResponse:
        r"""Lists all of the current SSL certificates for the instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLSslCertsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCertsListResponse])
                res.ssl_certs_list_response = out

        return res

    