from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDMovePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDMoveRequest:
    path_params: PostModalitiesIDMovePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDMoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
