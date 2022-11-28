from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPasswordPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserPasswordRequests:
    update_user_password: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_user_password1: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_user_password2: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserPasswordSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserPasswordRequest:
    path_params: UpdateUserPasswordPathParams = field()
    request: UpdateUserPasswordRequests = field()
    security: UpdateUserPasswordSecurity = field()
    

@dataclass
class UpdateUserPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
