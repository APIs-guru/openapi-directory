from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDStorePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDStoreRequests:
    text_plain: bytes = field(metadata={'request': { 'media_type': 'text/plain' }})
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDStoreRequest:
    path_params: PostModalitiesIDStorePathParams = field()
    request: Optional[PostModalitiesIDStoreRequests] = field(default=None)
    

@dataclass
class PostModalitiesIDStoreResponse:
    content_type: str = field()
    status_code: int = field()
    post_modalities_id_store_200_application_json_any: Optional[Any] = field(default=None)
    
