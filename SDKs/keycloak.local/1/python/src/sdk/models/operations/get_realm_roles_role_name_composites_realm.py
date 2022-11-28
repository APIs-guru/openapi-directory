from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmRolesRoleNameCompositesRealmPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesRoleNameCompositesRealmRequest:
    path_params: GetRealmRolesRoleNameCompositesRealmPathParams = field()
    

@dataclass
class GetRealmRolesRoleNameCompositesRealmResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
