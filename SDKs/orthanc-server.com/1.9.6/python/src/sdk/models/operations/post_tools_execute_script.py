from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostToolsExecuteScriptRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostToolsExecuteScriptResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
