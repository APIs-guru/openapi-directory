from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAuthSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAuthRequest:
    security: GetAuthSecurity = field(default=None)
    

@dataclass
class GetAuthResponse:
    auth_result: Optional[shared.AuthResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
