import requests
from typing import Optional
from sdk.models import operations
from . import utils

class CertificateActions:
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

    
    def get_certificates_id_actions(self, request: operations.GetCertificatesIDActionsRequest) -> operations.GetCertificatesIDActionsResponse:
        r"""Get all Actions for a Certificate
        Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        
        Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_certificates_id_actions_action_id_(self, request: operations.GetCertificatesIDActionsActionIDRequest) -> operations.GetCertificatesIDActionsActionIDResponse:
        r"""Get an Action for a Certificate
        Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_certificates_id_actions_retry(self, request: operations.PostCertificatesIDActionsRetryRequest) -> operations.PostCertificatesIDActionsRetryResponse:
        r"""Retry Issuance or Renewal
        Retry a failed Certificate issuance or renewal.
        
        Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
        
        #### Call specific error codes
        
        | Code                                                    | Description                                                               |
        |---------------------------------------------------------|---------------------------------------------------------------------------|
        | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
        | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
        | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
        | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
        | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
        | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
        | `dns_zone_not_found`                                    | DNS zone not found                                                        |
        | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates/{id}/actions/retry", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCertificatesIDActionsRetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCertificatesIDActionsRetryActionResponse])
                res.action_response = out

        return res

    