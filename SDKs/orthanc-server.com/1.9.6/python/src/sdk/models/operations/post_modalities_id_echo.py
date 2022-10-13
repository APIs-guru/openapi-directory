from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDEchoPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDEchoRequest:
    path_params: PostModalitiesIDEchoPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDEchoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
