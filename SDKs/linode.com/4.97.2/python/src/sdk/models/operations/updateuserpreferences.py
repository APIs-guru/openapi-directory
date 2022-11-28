from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateUserPreferencesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateUserPreferencesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateUserPreferencesRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserPreferencesSecurity = field()
    

@dataclass
class UpdateUserPreferencesResponse:
    content_type: str = field()
    status_code: int = field()
    update_user_preferences_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_user_preferences_default_application_json_object: Optional[UpdateUserPreferencesDefaultApplicationJSON] = field(default=None)
    
