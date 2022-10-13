from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutRedirectToRequestBody:
    status_code: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'status_code' }})
    url: str = field(default=None, metadata={'form': { 'field_name': 'url' }})
    

@dataclass
class PutRedirectToRequest:
    request: PutRedirectToRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PutRedirectToResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
