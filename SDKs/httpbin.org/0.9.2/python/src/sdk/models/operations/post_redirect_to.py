from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostRedirectToRequestBody:
    url: str = field(metadata={'form': { 'field_name': 'url' }})
    status_code: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'status_code' }})
    

@dataclass
class PostRedirectToRequest:
    request: PostRedirectToRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostRedirectToResponse:
    content_type: str = field()
    status_code: int = field()
    
