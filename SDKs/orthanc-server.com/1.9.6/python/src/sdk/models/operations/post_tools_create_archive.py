from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsCreateArchiveRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsCreateArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_tools_create_archive_200_application_json_any: Optional[Any] = field(default=None)
    
