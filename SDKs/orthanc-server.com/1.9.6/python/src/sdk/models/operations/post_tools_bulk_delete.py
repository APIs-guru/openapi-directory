from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsBulkDeleteRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsBulkDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
