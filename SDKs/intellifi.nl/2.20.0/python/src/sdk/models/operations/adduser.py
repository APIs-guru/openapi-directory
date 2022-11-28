from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class AddUserRequest:
    request: shared.UserInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddUserSecurity = field()
    

@dataclass
class AddUserResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
