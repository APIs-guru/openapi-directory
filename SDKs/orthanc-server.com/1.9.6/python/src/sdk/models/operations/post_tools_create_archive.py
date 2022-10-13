from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsCreateArchiveRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsCreateArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    post_tools_create_archive_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
