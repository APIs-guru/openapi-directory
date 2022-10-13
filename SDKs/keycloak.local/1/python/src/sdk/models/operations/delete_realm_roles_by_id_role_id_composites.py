from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class DeleteRealmRolesByIDRoleIDCompositesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesByIDRoleIDCompositesRequest:
    path_params: DeleteRealmRolesByIDRoleIDCompositesPathParams = field(default=None)
    request: List[shared.RoleRepresentation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRealmRolesByIDRoleIDCompositesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
