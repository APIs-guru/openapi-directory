from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsCreateRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
