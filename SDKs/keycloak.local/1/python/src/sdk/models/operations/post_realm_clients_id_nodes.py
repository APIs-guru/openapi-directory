from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmClientsIDNodesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDNodesRequest:
    path_params: PostRealmClientsIDNodesPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDNodesResponse:
    content_type: str = field()
    status_code: int = field()
    
