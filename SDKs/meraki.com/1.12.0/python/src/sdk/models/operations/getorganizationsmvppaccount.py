from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSmVppAccountPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    vpp_account_id: str = field(metadata={'path_param': { 'field_name': 'vppAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSmVppAccountRequest:
    path_params: GetOrganizationSmVppAccountPathParams = field()
    

@dataclass
class GetOrganizationSmVppAccountResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_sm_vpp_account_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
