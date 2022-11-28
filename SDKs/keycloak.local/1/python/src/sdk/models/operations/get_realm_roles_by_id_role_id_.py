from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmRolesByIDRoleIDPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesByIDRoleIDRequest:
    path_params: GetRealmRolesByIDRoleIDPathParams = field()
    

@dataclass
class GetRealmRolesByIDRoleIDResponse:
    content_type: str = field()
    status_code: int = field()
    role_representation: Optional[shared.RoleRepresentation] = field(default=None)
    
