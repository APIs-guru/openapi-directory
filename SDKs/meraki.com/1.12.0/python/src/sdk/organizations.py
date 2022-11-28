import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Organizations:
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

    
    def assign_organization_licenses_seats(self, request: operations.AssignOrganizationLicensesSeatsRequest) -> operations.AssignOrganizationLicensesSeatsResponse:
        r"""Assign SM seats to a network
        Assign SM seats to a network. This will increase the managed SM device limit of the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/assignSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.assign_organization_licenses_seats_200_application_json_object = out

        return res

    
    def claim_into_organization(self, request: operations.ClaimIntoOrganizationRequest) -> operations.ClaimIntoOrganizationResponse:
        r"""Claim a list of devices, licenses, and/or orders into an organization
        Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimIntoOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.claim_into_organization_200_application_json_object = out

        return res

    
    def clone_organization(self, request: operations.CloneOrganizationRequest) -> operations.CloneOrganizationResponse:
        r"""Create a new organization by cloning the addressed organization
        Create a new organization by cloning the addressed organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_201_application_json_object = out

        return res

    
    def combine_organization_networks(self, request: operations.CombineOrganizationNetworksRequest) -> operations.CombineOrganizationNetworksResponse:
        r"""Combine multiple networks into a single network
        Combine multiple networks into a single network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks/combine", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CombineOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.combine_organization_networks_200_application_json_object = out

        return res

    
    def create_organization(self, request: operations.CreateOrganizationRequest) -> operations.CreateOrganizationResponse:
        r"""Create a new organization
        Create a new organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_201_application_json_object = out

        return res

    
    def create_organization_action_batch(self, request: operations.CreateOrganizationActionBatchRequest) -> operations.CreateOrganizationActionBatchResponse:
        r"""Create an action batch
        Create an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_action_batch_201_application_json_object = out

        return res

    
    def create_organization_adaptive_policy_acl(self, request: operations.CreateOrganizationAdaptivePolicyACLRequest) -> operations.CreateOrganizationAdaptivePolicyACLResponse:
        r"""Creates new adaptive policy ACL
        Creates new adaptive policy ACL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def create_organization_admin(self, request: operations.CreateOrganizationAdminRequest) -> operations.CreateOrganizationAdminResponse:
        r"""Create a new dashboard administrator
        Create a new dashboard administrator
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_admin_201_application_json_object = out

        return res

    
    def create_organization_branding_policy(self, request: operations.CreateOrganizationBrandingPolicyRequest) -> operations.CreateOrganizationBrandingPolicyResponse:
        r"""Add a new branding policy to an organization
        Add a new branding policy to an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_branding_policy_201_application_json_object = out

        return res

    
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

    
    def create_organization_network(self, request: operations.CreateOrganizationNetworkRequest) -> operations.CreateOrganizationNetworkResponse:
        r"""Create a network
        Create a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_network_201_application_json_object = out

        return res

    
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

    
    def create_organization_saml_role(self, request: operations.CreateOrganizationSamlRoleRequest) -> operations.CreateOrganizationSamlRoleResponse:
        r"""Create a SAML role
        Create a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_saml_role_201_application_json_object = out

        return res

    
    def delete_organization(self, request: operations.DeleteOrganizationRequest) -> operations.DeleteOrganizationResponse:
        r"""Delete an organization
        Delete an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_action_batch(self, request: operations.DeleteOrganizationActionBatchRequest) -> operations.DeleteOrganizationActionBatchResponse:
        r"""Delete an action batch
        Delete an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_adaptive_policy_acl(self, request: operations.DeleteOrganizationAdaptivePolicyACLRequest) -> operations.DeleteOrganizationAdaptivePolicyACLResponse:
        r"""Deletes the specified adaptive policy ACL
        Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_admin(self, request: operations.DeleteOrganizationAdminRequest) -> operations.DeleteOrganizationAdminResponse:
        r"""Revoke all access for a dashboard administrator within this organization
        Revoke all access for a dashboard administrator within this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_organization_branding_policy(self, request: operations.DeleteOrganizationBrandingPolicyRequest) -> operations.DeleteOrganizationBrandingPolicyResponse:
        r"""Delete a branding policy
        Delete a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

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

    
    def delete_organization_saml_role(self, request: operations.DeleteOrganizationSamlRoleRequest) -> operations.DeleteOrganizationSamlRoleResponse:
        r"""Remove a SAML role
        Remove a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        r"""Return an organization
        Return an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_200_application_json_object = out

        return res

    
    def get_organization_action_batch(self, request: operations.GetOrganizationActionBatchRequest) -> operations.GetOrganizationActionBatchResponse:
        r"""Return an action batch
        Return an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batch_200_application_json_object = out

        return res

    
    def get_organization_action_batches(self, request: operations.GetOrganizationActionBatchesRequest) -> operations.GetOrganizationActionBatchesResponse:
        r"""Return the list of action batches in the organization
        Return the list of action batches in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batches_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_acl(self, request: operations.GetOrganizationAdaptivePolicyACLRequest) -> operations.GetOrganizationAdaptivePolicyACLResponse:
        r"""Returns the adaptive policy ACL information
        Returns the adaptive policy ACL information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_acls(self, request: operations.GetOrganizationAdaptivePolicyAclsRequest) -> operations.GetOrganizationAdaptivePolicyAclsResponse:
        r"""List adaptive policy ACLs in a organization
        List adaptive policy ACLs in a organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicyAclsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_acls_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_settings(self, request: operations.GetOrganizationAdaptivePolicySettingsRequest) -> operations.GetOrganizationAdaptivePolicySettingsResponse:
        r"""Returns global adaptive policy settings in an organization
        Returns global adaptive policy settings in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    def get_organization_admins(self, request: operations.GetOrganizationAdminsRequest) -> operations.GetOrganizationAdminsResponse:
        r"""List the dashboard administrators in this organization
        List the dashboard administrators in this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdminsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_admins_200_application_json_object = out

        return res

    
    def get_organization_api_requests(self, request: operations.GetOrganizationAPIRequestsRequest) -> operations.GetOrganizationAPIRequestsResponse:
        r"""List the API requests made by an organization
        List the API requests made by an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_200_application_json_object = out

        return res

    
    def get_organization_api_requests_overview(self, request: operations.GetOrganizationAPIRequestsOverviewRequest) -> operations.GetOrganizationAPIRequestsOverviewResponse:
        r"""Return an aggregated overview of API requests data
        Return an aggregated overview of API requests data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_overview_200_application_json_object = out

        return res

    
    def get_organization_branding_policies(self, request: operations.GetOrganizationBrandingPoliciesRequest) -> operations.GetOrganizationBrandingPoliciesResponse:
        r"""List the branding policies of an organization
        List the branding policies of an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_200_application_json_object = out

        return res

    
    def get_organization_branding_policies_priorities(self, request: operations.GetOrganizationBrandingPoliciesPrioritiesRequest) -> operations.GetOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Return the branding policy IDs of an organization in priority order
        Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def get_organization_branding_policy(self, request: operations.GetOrganizationBrandingPolicyRequest) -> operations.GetOrganizationBrandingPolicyResponse:
        r"""Return a branding policy
        Return a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_branding_policy_200_application_json_object = out

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

    
    def get_organization_configuration_changes(self, request: operations.GetOrganizationConfigurationChangesRequest) -> operations.GetOrganizationConfigurationChangesResponse:
        r"""View the Change Log for your organization
        View the Change Log for your organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configurationChanges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigurationChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_configuration_changes_200_application_json_object = out

        return res

    
    def get_organization_devices(self, request: operations.GetOrganizationDevicesRequest) -> operations.GetOrganizationDevicesResponse:
        r"""List the devices in an organization
        List the devices in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_200_application_json_object = out

        return res

    
    def get_organization_devices_statuses(self, request: operations.GetOrganizationDevicesStatusesRequest) -> operations.GetOrganizationDevicesStatusesResponse:
        r"""List the status of every Meraki device in the organization
        List the status of every Meraki device in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_statuses_200_application_json_object = out

        return res

    
    def get_organization_devices_uplinks_loss_and_latency(self, request: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest) -> operations.GetOrganizationDevicesUplinksLossAndLatencyResponse:
        r"""Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/uplinksLossAndLatency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesUplinksLossAndLatencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_uplinks_loss_and_latency_200_application_json_object = out

        return res

    
    def get_organization_inventory_device(self, request: operations.GetOrganizationInventoryDeviceRequest) -> operations.GetOrganizationInventoryDeviceResponse:
        r"""Return a single device from the inventory of an organization
        Return a single device from the inventory of an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices/{serial}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInventoryDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_inventory_device_200_application_json_object = out

        return res

    
    def get_organization_inventory_devices(self, request: operations.GetOrganizationInventoryDevicesRequest) -> operations.GetOrganizationInventoryDevicesResponse:
        r"""Return the device inventory for an organization
        Return the device inventory for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/inventoryDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationInventoryDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_inventory_devices_200_application_json_object = out

        return res

    
    def get_organization_license(self, request: operations.GetOrganizationLicenseRequest) -> operations.GetOrganizationLicenseResponse:
        r"""Display a license
        Display a license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_license_200_application_json_object = out

        return res

    
    def get_organization_licenses(self, request: operations.GetOrganizationLicensesRequest) -> operations.GetOrganizationLicensesResponse:
        r"""List the licenses for an organization
        List the licenses for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_200_application_json_object = out

        return res

    
    def get_organization_licenses_overview(self, request: operations.GetOrganizationLicensesOverviewRequest) -> operations.GetOrganizationLicensesOverviewResponse:
        r"""Return an overview of the license state for an organization
        Return an overview of the license state for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/overview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_overview_200_application_json_object = out

        return res

    
    def get_organization_login_security(self, request: operations.GetOrganizationLoginSecurityRequest) -> operations.GetOrganizationLoginSecurityResponse:
        r"""Returns the login security settings for an organization.
        Returns the login security settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_login_security_200_application_json_object = out

        return res

    
    def get_organization_networks(self, request: operations.GetOrganizationNetworksRequest) -> operations.GetOrganizationNetworksResponse:
        r"""List the networks that the user has privileges on in an organization
        List the networks that the user has privileges on in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_networks_200_application_json_object = out

        return res

    
    def get_organization_openapi_spec(self, request: operations.GetOrganizationOpenapiSpecRequest) -> operations.GetOrganizationOpenapiSpecResponse:
        r"""Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/openapiSpec", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationOpenapiSpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_openapi_spec_200_application_json_object = out

        return res

    
    def get_organization_saml(self, request: operations.GetOrganizationSamlRequest) -> operations.GetOrganizationSamlResponse:
        r"""Returns the SAML SSO enabled settings for an organization.
        Returns the SAML SSO enabled settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_200_application_json_object = out

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

    
    def get_organization_saml_role(self, request: operations.GetOrganizationSamlRoleRequest) -> operations.GetOrganizationSamlRoleResponse:
        r"""Return a SAML role
        Return a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_role_200_application_json_object = out

        return res

    
    def get_organization_saml_roles(self, request: operations.GetOrganizationSamlRolesRequest) -> operations.GetOrganizationSamlRolesResponse:
        r"""List the SAML roles for this organization
        List the SAML roles for this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSamlRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_saml_roles_200_application_json_object = out

        return res

    
    def get_organization_snmp(self, request: operations.GetOrganizationSnmpRequest) -> operations.GetOrganizationSnmpResponse:
        r"""Return the SNMP settings for an organization
        Return the SNMP settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_snmp_200_application_json_object = out

        return res

    
    def get_organization_uplinks_statuses(self, request: operations.GetOrganizationUplinksStatusesRequest) -> operations.GetOrganizationUplinksStatusesResponse:
        r"""List the uplink status of every Meraki MX, MG and Z series devices in the organization
        List the uplink status of every Meraki MX, MG and Z series devices in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/uplinks/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationUplinksStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_uplinks_statuses_200_application_json_object = out

        return res

    
    def get_organization_webhooks_alert_types(self, request: operations.GetOrganizationWebhooksAlertTypesRequest) -> operations.GetOrganizationWebhooksAlertTypesResponse:
        r"""Return a list of alert types to be used with managing webhook alerts
        Return a list of alert types to be used with managing webhook alerts
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/alertTypes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksAlertTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_alert_types_200_application_json_object = out

        return res

    
    def get_organization_webhooks_logs(self, request: operations.GetOrganizationWebhooksLogsRequest) -> operations.GetOrganizationWebhooksLogsResponse:
        r"""Return the log of webhook POSTs sent
        Return the log of webhook POSTs sent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_logs_200_application_json_object = out

        return res

    
    def get_organizations(self) -> operations.GetOrganizationsResponse:
        r"""List the organizations that the user has privileges on
        List the organizations that the user has privileges on
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organizations_200_application_json_object = out

        return res

    
    def move_organization_licenses(self, request: operations.MoveOrganizationLicensesRequest) -> operations.MoveOrganizationLicensesResponse:
        r"""Move licenses to another organization
        Move licenses to another organization. This will also move any devices that the licenses are assigned to
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_200_application_json_object = out

        return res

    
    def move_organization_licenses_seats(self, request: operations.MoveOrganizationLicensesSeatsRequest) -> operations.MoveOrganizationLicensesSeatsResponse:
        r"""Move SM seats to another organization
        Move SM seats to another organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/moveSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_organization_licenses_seats_200_application_json_object = out

        return res

    
    def renew_organization_licenses_seats(self, request: operations.RenewOrganizationLicensesSeatsRequest) -> operations.RenewOrganizationLicensesSeatsResponse:
        r"""Renew SM seats of a license
        Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/renewSeats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RenewOrganizationLicensesSeatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.renew_organization_licenses_seats_200_application_json_object = out

        return res

    
    def update_organization(self, request: operations.UpdateOrganizationRequest) -> operations.UpdateOrganizationResponse:
        r"""Update an organization
        Update an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_200_application_json_object = out

        return res

    
    def update_organization_action_batch(self, request: operations.UpdateOrganizationActionBatchRequest) -> operations.UpdateOrganizationActionBatchResponse:
        r"""Update an action batch
        Update an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_action_batch_200_application_json_object = out

        return res

    
    def update_organization_adaptive_policy_acl(self, request: operations.UpdateOrganizationAdaptivePolicyACLRequest) -> operations.UpdateOrganizationAdaptivePolicyACLResponse:
        r"""Updates an adaptive policy ACL
        Updates an adaptive policy ACL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicyACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_acl_200_application_json_object = out

        return res

    
    def update_organization_adaptive_policy_settings(self, request: operations.UpdateOrganizationAdaptivePolicySettingsRequest) -> operations.UpdateOrganizationAdaptivePolicySettingsResponse:
        r"""Update global adaptive policy settings
        Update global adaptive policy settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    def update_organization_admin(self, request: operations.UpdateOrganizationAdminRequest) -> operations.UpdateOrganizationAdminResponse:
        r"""Update an administrator
        Update an administrator
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/admins/{adminId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_admin_200_application_json_object = out

        return res

    
    def update_organization_branding_policies_priorities(self, request: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest) -> operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse:
        r"""Update the priority ordering of an organization's branding policies.
        Update the priority ordering of an organization's branding policies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/priorities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policies_priorities_200_application_json_object = out

        return res

    
    def update_organization_branding_policy(self, request: operations.UpdateOrganizationBrandingPolicyRequest) -> operations.UpdateOrganizationBrandingPolicyResponse:
        r"""Update a branding policy
        Update a branding policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationBrandingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_branding_policy_200_application_json_object = out

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

    
    def update_organization_license(self, request: operations.UpdateOrganizationLicenseRequest) -> operations.UpdateOrganizationLicenseResponse:
        r"""Update a license
        Update a license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/{licenseId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_license_200_application_json_object = out

        return res

    
    def update_organization_login_security(self, request: operations.UpdateOrganizationLoginSecurityRequest) -> operations.UpdateOrganizationLoginSecurityResponse:
        r"""Update the login security settings for an organization
        Update the login security settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/loginSecurity", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationLoginSecurityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_login_security_200_application_json_object = out

        return res

    
    def update_organization_saml(self, request: operations.UpdateOrganizationSamlRequest) -> operations.UpdateOrganizationSamlResponse:
        r"""Updates the SAML SSO enabled settings for an organization.
        Updates the SAML SSO enabled settings for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/saml", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_200_application_json_object = out

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

    
    def update_organization_saml_role(self, request: operations.UpdateOrganizationSamlRoleRequest) -> operations.UpdateOrganizationSamlRoleResponse:
        r"""Update a SAML role
        Update a SAML role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSamlRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_saml_role_200_application_json_object = out

        return res

    
    def update_organization_snmp(self, request: operations.UpdateOrganizationSnmpRequest) -> operations.UpdateOrganizationSnmpResponse:
        r"""Update the SNMP settings for an organization
        Update the SNMP settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/snmp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_snmp_200_application_json_object = out

        return res

    