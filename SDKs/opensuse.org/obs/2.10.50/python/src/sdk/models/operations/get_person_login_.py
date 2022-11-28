from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPersonLoginPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginRequest:
    path_params: GetPersonLoginPathParams = field()
    security: GetPersonLoginSecurity = field()
    

@dataclass
class GetPersonLoginResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
