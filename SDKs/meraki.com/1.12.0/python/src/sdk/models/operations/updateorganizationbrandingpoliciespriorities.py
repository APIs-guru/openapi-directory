from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody:
    branding_policy_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandingPolicyIds' }})
    

@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequest:
    path_params: UpdateOrganizationBrandingPoliciesPrioritiesPathParams = field(default=None)
    request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_branding_policies_priorities_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
