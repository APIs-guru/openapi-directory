from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class AddUserRequest:
    request: shared.User = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddUserSecurity = field(default=None)
    

@dataclass
class AddUserResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
