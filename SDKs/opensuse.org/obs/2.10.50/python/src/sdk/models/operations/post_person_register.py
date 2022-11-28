from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPersonRegisterRequest:
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PostPersonRegisterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
