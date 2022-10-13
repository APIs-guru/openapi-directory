from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRequest:
    request: shared.Request = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSecurity = field(default=None)
    

@dataclass
class PostResponse:
    content_type: str = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    status_code: int = field(default=None)
    
