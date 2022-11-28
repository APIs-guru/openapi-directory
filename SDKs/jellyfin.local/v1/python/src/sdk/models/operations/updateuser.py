from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequestsInput:
    user_dto: Optional[shared.UserDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_dto1: Optional[shared.UserDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_dto2: Optional[shared.UserDtoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field()
    request: UpdateUserRequestsInput = field()
    security: UpdateUserSecurity = field()
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
