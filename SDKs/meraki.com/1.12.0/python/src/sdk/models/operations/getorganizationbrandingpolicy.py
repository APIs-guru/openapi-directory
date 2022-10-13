from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationBrandingPolicyRequest:
    path_params: GetOrganizationBrandingPolicyPathParams = field(default=None)
    

@dataclass
class GetOrganizationBrandingPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_branding_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
