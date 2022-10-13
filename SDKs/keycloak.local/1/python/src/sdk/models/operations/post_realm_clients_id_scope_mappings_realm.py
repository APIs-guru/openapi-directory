from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostRealmClientsIDScopeMappingsRealmPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDScopeMappingsRealmRequest:
    path_params: PostRealmClientsIDScopeMappingsRealmPathParams = field(default=None)
    request: List[shared.RoleRepresentation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDScopeMappingsRealmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
