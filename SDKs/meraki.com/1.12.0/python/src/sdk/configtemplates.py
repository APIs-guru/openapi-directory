import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ConfigTemplates:
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

    
    def create_organization_config_template(self, request: operations.CreateOrganizationConfigTemplateRequest) -> operations.CreateOrganizationConfigTemplateResponse:
        r"""Create a new configuration template
        Create a new configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_config_template_201_application_json_object = out

        return res

    
    def delete_organization_config_template(self, request: operations.DeleteOrganizationConfigTemplateRequest) -> operations.DeleteOrganizationConfigTemplateResponse:
        r"""Remove a configuration template
        Remove a configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_organization_config_template(self, request: operations.GetOrganizationConfigTemplateRequest) -> operations.GetOrganizationConfigTemplateResponse:
        r"""Return a single configuration template
        Return a single configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_port(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Return a switch profile port
        Return a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_ports(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse:
        r"""Return all the ports of a switch profile
        Return all the ports of a switch profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_ports_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profiles(self, request: operations.GetOrganizationConfigTemplateSwitchProfilesRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilesResponse:
        r"""List the switch profiles for your switch template configuration
        List the switch profiles for your switch template configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profiles_200_application_json_object = out

        return res

    
    def get_organization_config_templates(self, request: operations.GetOrganizationConfigTemplatesRequest) -> operations.GetOrganizationConfigTemplatesResponse:
        r"""List the configuration templates for this organization
        List the configuration templates for this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_templates_200_application_json_object = out

        return res

    
    def update_organization_config_template(self, request: operations.UpdateOrganizationConfigTemplateRequest) -> operations.UpdateOrganizationConfigTemplateResponse:
        r"""Update a configuration template
        Update a configuration template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_200_application_json_object = out

        return res

    
    def update_organization_config_template_switch_profile_port(self, request: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Update a switch profile port
        Update a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    