from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field(default=None)
    request: shared.User = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserSecurity = field(default=None)
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
