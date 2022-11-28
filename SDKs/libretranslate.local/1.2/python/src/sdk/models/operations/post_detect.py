from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDetectRequest:
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostDetectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
