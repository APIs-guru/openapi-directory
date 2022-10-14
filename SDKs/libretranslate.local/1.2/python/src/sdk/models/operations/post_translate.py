from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostTranslateRequest:
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostTranslateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
