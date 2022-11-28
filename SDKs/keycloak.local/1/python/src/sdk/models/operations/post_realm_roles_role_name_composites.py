from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostRealmRolesRoleNameCompositesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmRolesRoleNameCompositesRequest:
    path_params: PostRealmRolesRoleNameCompositesPathParams = field()
    request: List[shared.RoleRepresentation] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmRolesRoleNameCompositesResponse:
    content_type: str = field()
    status_code: int = field()
    
