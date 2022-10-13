from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationBrandingPoliciesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationBrandingPoliciesRequest:
    path_params: GetOrganizationBrandingPoliciesPathParams = field(default=None)
    

@dataclass
class GetOrganizationBrandingPoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_branding_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
