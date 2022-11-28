from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAuthSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAuthRequest:
    security: GetAuthSecurity = field()
    

@dataclass
class GetAuthResponse:
    content_type: str = field()
    status_code: int = field()
    auth_result: Optional[shared.AuthResult] = field(default=None)
    
