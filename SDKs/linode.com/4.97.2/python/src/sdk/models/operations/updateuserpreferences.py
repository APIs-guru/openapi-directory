from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateUserPreferencesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateUserPreferencesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateUserPreferencesSecurity:
    option1: Optional[UpdateUserPreferencesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateUserPreferencesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateUserPreferencesRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserPreferencesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateUserPreferencesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateUserPreferencesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_user_preferences_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_user_preferences_default_application_json_object: Optional[UpdateUserPreferencesDefaultApplicationJSON] = field(default=None)
    
