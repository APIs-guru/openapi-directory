from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmRolesByIDRoleIDCompositesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesByIDRoleIDCompositesRequest:
    path_params: GetRealmRolesByIDRoleIDCompositesPathParams = field()
    

@dataclass
class GetRealmRolesByIDRoleIDCompositesResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
