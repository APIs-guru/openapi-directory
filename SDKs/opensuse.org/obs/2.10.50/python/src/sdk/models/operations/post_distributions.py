from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDistributionsSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDistributionsRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostDistributionsSecurity = field(default=None)
    

@dataclass
class PostDistributionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
