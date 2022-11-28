from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field()
    security: DeleteUserSecurity = field()
    

@dataclass
class DeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
