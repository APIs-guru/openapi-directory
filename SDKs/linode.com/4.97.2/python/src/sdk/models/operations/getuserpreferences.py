from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserPreferencesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetUserPreferencesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetUserPreferencesRequest:
    security: GetUserPreferencesSecurity = field()
    

@dataclass
class GetUserPreferencesResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_preferences_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_user_preferences_default_application_json_object: Optional[GetUserPreferencesDefaultApplicationJSON] = field(default=None)
    
