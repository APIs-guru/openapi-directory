from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRequestIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRequestIDRequest:
    path_params: PutRequestIDPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutRequestIDSecurity = field()
    

@dataclass
class PutRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
