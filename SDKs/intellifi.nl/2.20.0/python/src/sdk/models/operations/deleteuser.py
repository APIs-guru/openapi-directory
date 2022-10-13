from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field(default=None)
    security: DeleteUserSecurity = field(default=None)
    

@dataclass
class DeleteUserResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
