from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostRealmGroupsIDRoleMappingsRealmPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmGroupsIDRoleMappingsRealmRequest:
    path_params: PostRealmGroupsIDRoleMappingsRealmPathParams = field()
    request: List[shared.RoleRepresentation] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmGroupsIDRoleMappingsRealmResponse:
    content_type: str = field()
    status_code: int = field()
    
