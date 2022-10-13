from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmRolesByIDRoleIDPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesByIDRoleIDRequest:
    path_params: GetRealmRolesByIDRoleIDPathParams = field(default=None)
    

@dataclass
class GetRealmRolesByIDRoleIDResponse:
    content_type: str = field(default=None)
    role_representation: Optional[shared.RoleRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
