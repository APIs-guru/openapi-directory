from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsLookupRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostToolsLookupResponse:
    content_type: str = field()
    status_code: int = field()
    post_tools_lookup_200_application_json_any: Optional[Any] = field(default=None)
    
