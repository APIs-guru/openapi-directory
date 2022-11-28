from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class DeleteRealmRolesRoleNameCompositesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesRoleNameCompositesRequest:
    path_params: DeleteRealmRolesRoleNameCompositesPathParams = field()
    request: List[shared.RoleRepresentation] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRealmRolesRoleNameCompositesResponse:
    content_type: str = field()
    status_code: int = field()
    
