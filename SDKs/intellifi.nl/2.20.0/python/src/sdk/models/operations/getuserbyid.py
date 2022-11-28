from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByIDSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class GetUserByIDRequest:
    path_params: GetUserByIDPathParams = field()
    security: GetUserByIDSecurity = field()
    

@dataclass
class GetUserByIDResponseOutput:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.UserOutput] = field(default=None)
    
