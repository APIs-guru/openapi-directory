from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class DeleteRealmUsersIDRoleMappingsRealmPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDRoleMappingsRealmRequest:
    path_params: DeleteRealmUsersIDRoleMappingsRealmPathParams = field(default=None)
    request: List[shared.RoleRepresentation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRealmUsersIDRoleMappingsRealmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
