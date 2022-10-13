from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPeersIDStorePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPeersIDStoreRequests:
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostPeersIDStoreRequest:
    path_params: PostPeersIDStorePathParams = field(default=None)
    request: Optional[PostPeersIDStoreRequests] = field(default=None)
    

@dataclass
class PostPeersIDStoreResponse:
    content_type: str = field(default=None)
    post_peers_id_store_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
