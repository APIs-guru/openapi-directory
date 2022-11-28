from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPersonLoginTokenPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginTokenSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginTokenRequest:
    path_params: GetPersonLoginTokenPathParams = field()
    security: GetPersonLoginTokenSecurity = field()
    

@dataclass
class GetPersonLoginTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
