from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPersonLoginPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutPersonLoginRequest:
    path_params: PutPersonLoginPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutPersonLoginSecurity = field()
    

@dataclass
class PutPersonLoginResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
