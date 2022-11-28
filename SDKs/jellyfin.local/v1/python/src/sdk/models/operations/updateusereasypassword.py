from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserEasyPasswordPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserEasyPasswordRequests:
    update_user_easy_password: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_user_easy_password1: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_user_easy_password2: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserEasyPasswordSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserEasyPasswordRequest:
    path_params: UpdateUserEasyPasswordPathParams = field()
    request: UpdateUserEasyPasswordRequests = field()
    security: UpdateUserEasyPasswordSecurity = field()
    

@dataclass
class UpdateUserEasyPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
