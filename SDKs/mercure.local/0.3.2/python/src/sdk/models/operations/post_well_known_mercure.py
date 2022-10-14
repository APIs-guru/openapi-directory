from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWellKnownMercureRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostWellKnownMercureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
