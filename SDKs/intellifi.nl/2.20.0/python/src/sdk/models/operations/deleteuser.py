from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field()
    security: DeleteUserSecurity = field()
    

@dataclass
class DeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
