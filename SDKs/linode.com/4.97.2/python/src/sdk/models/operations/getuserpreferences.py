from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserPreferencesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUserPreferencesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPreferencesSecurity:
    option1: Optional[GetUserPreferencesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserPreferencesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserPreferencesRequest:
    security: GetUserPreferencesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserPreferencesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetUserPreferencesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_preferences_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_user_preferences_default_application_json_object: Optional[GetUserPreferencesDefaultApplicationJSON] = field(default=None)
    
