from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSmVppAccountPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    vpp_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vppAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSmVppAccountRequest:
    path_params: GetOrganizationSmVppAccountPathParams = field(default=None)
    

@dataclass
class GetOrganizationSmVppAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_sm_vpp_account_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
