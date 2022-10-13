from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmRolesByIDRoleIDPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRolesByIDRoleIDRequest:
    path_params: PutRealmRolesByIDRoleIDPathParams = field(default=None)
    request: shared.RoleRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmRolesByIDRoleIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
