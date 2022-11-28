from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRequest:
    request: shared.Request = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostSecurity = field()
    

@dataclass
class PostResponse:
    content_type: str = field()
    status_code: int = field()
    response: Optional[shared.Response] = field(default=None)
    
