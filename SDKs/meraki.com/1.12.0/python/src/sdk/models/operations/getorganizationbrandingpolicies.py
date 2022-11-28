from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationBrandingPoliciesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationBrandingPoliciesRequest:
    path_params: GetOrganizationBrandingPoliciesPathParams = field()
    

@dataclass
class GetOrganizationBrandingPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_branding_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
