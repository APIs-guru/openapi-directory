from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsCreateMediaRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsCreateMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_tools_create_media_200_application_json_any: Optional[Any] = field(default=None)
    
