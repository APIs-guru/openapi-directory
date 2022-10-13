from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDStorePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDStoreRequests:
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostModalitiesIDStoreRequest:
    path_params: PostModalitiesIDStorePathParams = field(default=None)
    request: Optional[PostModalitiesIDStoreRequests] = field(default=None)
    

@dataclass
class PostModalitiesIDStoreResponse:
    content_type: str = field(default=None)
    post_modalities_id_store_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
