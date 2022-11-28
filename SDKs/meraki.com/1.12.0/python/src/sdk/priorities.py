import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Priorities:
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

    