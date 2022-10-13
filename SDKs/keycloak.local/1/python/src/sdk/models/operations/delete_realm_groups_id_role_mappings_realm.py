from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class DeleteRealmGroupsIDRoleMappingsRealmPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmGroupsIDRoleMappingsRealmRequest:
    path_params: DeleteRealmGroupsIDRoleMappingsRealmPathParams = field(default=None)
    request: List[shared.RoleRepresentation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRealmGroupsIDRoleMappingsRealmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
