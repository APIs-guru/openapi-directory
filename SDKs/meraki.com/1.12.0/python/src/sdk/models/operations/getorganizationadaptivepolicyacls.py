from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdaptivePolicyAclsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdaptivePolicyAclsRequest:
    path_params: GetOrganizationAdaptivePolicyAclsPathParams = field(default=None)
    

@dataclass
class GetOrganizationAdaptivePolicyAclsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_adaptive_policy_acls_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
