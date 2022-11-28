from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsBulkContentRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsBulkContentResponse:
    content_type: str = field()
    status_code: int = field()
    
