import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Certificates:
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

    
    def delete_certificates_id_(self, request: operations.DeleteCertificatesIDRequest) -> operations.DeleteCertificatesIDResponse:
        r"""Delete a Certificate
        Deletes a Certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_certificates(self, request: operations.GetCertificatesRequest) -> operations.GetCertificatesResponse:
        r"""Get all Certificates
        Returns all Certificate objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/certificates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesCertificatesResponse])
                res.certificates_response = out

        return res

    
    def get_certificates_id_(self, request: operations.GetCertificatesIDRequest) -> operations.GetCertificatesIDResponse:
        r"""Get a Certificate
        Gets a specific Certificate object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDCertificateResponse])
                res.certificate_response = out

        return res

    
    def post_certificates(self, request: operations.PostCertificatesRequest) -> operations.PostCertificatesResponse:
        r"""Create a Certificate
        Creates a new Certificate.
        
        The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.
        
        In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.
        
        For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/certificates"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCertificatesCreateCertificateResponse])
                res.create_certificate_response = out

        return res

    
    def put_certificates_id_(self, request: operations.PutCertificatesIDRequest) -> operations.PutCertificatesIDResponse:
        r"""Update a Certificate
        Updates the Certificate properties.
        
        Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        Note: if the Certificate object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCertificatesIDCertificateResponse])
                res.certificate_response = out

        return res

    