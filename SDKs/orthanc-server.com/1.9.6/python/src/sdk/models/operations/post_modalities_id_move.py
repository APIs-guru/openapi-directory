from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDMovePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDMoveRequest:
    path_params: PostModalitiesIDMovePathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDMoveResponse:
    content_type: str = field()
    status_code: int = field()
    
