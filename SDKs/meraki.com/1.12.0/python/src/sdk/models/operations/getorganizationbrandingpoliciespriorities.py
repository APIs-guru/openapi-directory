from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationBrandingPoliciesPrioritiesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationBrandingPoliciesPrioritiesRequest:
    path_params: GetOrganizationBrandingPoliciesPrioritiesPathParams = field(default=None)
    

@dataclass
class GetOrganizationBrandingPoliciesPrioritiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_branding_policies_priorities_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
