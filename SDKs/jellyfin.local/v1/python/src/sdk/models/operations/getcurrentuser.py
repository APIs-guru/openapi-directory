from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCurrentUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCurrentUserRequest:
    security: GetCurrentUserSecurity = field()
    

@dataclass
class GetCurrentUserResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    user_dto: Optional[shared.UserDto] = field(default=None)
    
