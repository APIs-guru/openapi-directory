import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class InboundSamlSsoProfiles:
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

    
    def cloudidentity_inbound_saml_sso_profiles_create(self, request: operations.CloudidentityInboundSamlSsoProfilesCreateRequest) -> operations.CloudidentityInboundSamlSsoProfilesCreateResponse:
        r"""Creates an InboundSamlSsoProfile for a customer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/inboundSamlSsoProfiles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityInboundSamlSsoProfilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_inbound_saml_sso_profiles_idp_credentials_add(self, request: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest) -> operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse:
        r"""Adds an IdpCredential. Up to 2 credentials are allowed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/idpCredentials:add", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_inbound_saml_sso_profiles_idp_credentials_list(self, request: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest) -> operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse:
        r"""Returns a list of IdpCredentials in an InboundSamlSsoProfile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/idpCredentials", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListIdpCredentialsResponse])
                res.list_idp_credentials_response = out

        return res

    
    def cloudidentity_inbound_saml_sso_profiles_list(self, request: operations.CloudidentityInboundSamlSsoProfilesListRequest) -> operations.CloudidentityInboundSamlSsoProfilesListResponse:
        r"""Lists InboundSamlSsoProfiles for a customer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/inboundSamlSsoProfiles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityInboundSamlSsoProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInboundSamlSsoProfilesResponse])
                res.list_inbound_saml_sso_profiles_response = out

        return res

    