from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdaptivePolicyACLPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdaptivePolicyACLRequest:
    path_params: GetOrganizationAdaptivePolicyACLPathParams = field(default=None)
    

@dataclass
class GetOrganizationAdaptivePolicyACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
