from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmClientsIDNodesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDNodesRequest:
    path_params: PostRealmClientsIDNodesPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDNodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
