from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAttributeSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeRequest:
    security: GetAttributeSecurity = field()
    

@dataclass
class GetAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
