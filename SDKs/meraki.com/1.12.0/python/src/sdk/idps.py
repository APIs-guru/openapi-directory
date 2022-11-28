import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Idps:
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

    
    def create_organization_saml_idp(self, request: operations.CreateOrganizationSamlIdpRequest) -> operations.CreateOrganizationSamlIdpResponse:
        r"""Create a SAML IdP for your organization.
        Create a SAML IdP for your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_idp_201_application_json_object = out

        return res

    
    def delete_organization_saml_idp(self, request: operations.DeleteOrganizationSamlIdpRequest) -> operations.DeleteOrganizationSamlIdpResponse:
        r"""Remove a SAML IdP in your organization.
        Remove a SAML IdP in your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_organization_saml_idp(self, request: operations.GetOrganizationSamlIdpRequest) -> operations.GetOrganizationSamlIdpResponse:
        r"""Get a SAML IdP from your organization.
        Get a SAML IdP from your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idp_200_application_json_object = out

        return res

    
    def get_organization_saml_idps(self, request: operations.GetOrganizationSamlIdpsRequest) -> operations.GetOrganizationSamlIdpsResponse:
        r"""List the SAML IdPs in your organization.
        List the SAML IdPs in your organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlIdpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_idps_200_application_json_object = out

        return res

    
    def update_organization_saml_idp(self, request: operations.UpdateOrganizationSamlIdpRequest) -> operations.UpdateOrganizationSamlIdpResponse:
        r"""Update a SAML IdP in your organization
        Update a SAML IdP in your organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml/idps/{idpId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlIdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_idp_200_application_json_object = out

        return res

    