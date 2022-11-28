from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPeersIDStorePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPeersIDStoreRequests:
    text_plain: bytes = field(metadata={'request': { 'media_type': 'text/plain' }})
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPeersIDStoreRequest:
    path_params: PostPeersIDStorePathParams = field()
    request: Optional[PostPeersIDStoreRequests] = field(default=None)
    

@dataclass
class PostPeersIDStoreResponse:
    content_type: str = field()
    status_code: int = field()
    post_peers_id_store_200_application_json_any: Optional[Any] = field(default=None)
    
