from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdaptivePolicyACLPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdaptivePolicyACLRequest:
    path_params: GetOrganizationAdaptivePolicyACLPathParams = field()
    

@dataclass
class GetOrganizationAdaptivePolicyACLResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
