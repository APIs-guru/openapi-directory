from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFirstUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFirstUserRequest:
    security: GetFirstUserSecurity = field()
    

@dataclass
class GetFirstUserResponse:
    content_type: str = field()
    status_code: int = field()
    startup_user_dto: Optional[shared.StartupUserDto] = field(default=None)
    
