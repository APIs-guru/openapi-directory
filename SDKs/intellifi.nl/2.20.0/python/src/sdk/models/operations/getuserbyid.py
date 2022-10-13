from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByIDSecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class GetUserByIDRequest:
    path_params: GetUserByIDPathParams = field(default=None)
    security: GetUserByIDSecurity = field(default=None)
    

@dataclass
class GetUserByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
