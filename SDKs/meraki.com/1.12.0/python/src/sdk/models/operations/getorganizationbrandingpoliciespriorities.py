from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationBrandingPoliciesPrioritiesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationBrandingPoliciesPrioritiesRequest:
    path_params: GetOrganizationBrandingPoliciesPrioritiesPathParams = field()
    

@dataclass
class GetOrganizationBrandingPoliciesPrioritiesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_branding_policies_priorities_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
