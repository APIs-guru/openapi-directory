from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field()
    request: shared.UserInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserSecurity = field()
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
