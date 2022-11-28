from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateUserDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field()
    security: UpdateUserSecurity = field()
    request: Optional[shared.UserInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    update_user_default_application_json_object: Optional[UpdateUserDefaultApplicationJSON] = field(default=None)
    
