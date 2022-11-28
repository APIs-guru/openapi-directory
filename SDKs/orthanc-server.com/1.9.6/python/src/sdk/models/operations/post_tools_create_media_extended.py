from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsCreateMediaExtendedRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsCreateMediaExtendedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_tools_create_media_extended_200_application_json_any: Optional[Any] = field(default=None)
    
