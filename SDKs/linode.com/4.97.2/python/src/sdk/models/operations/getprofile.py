from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProfileSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetProfileDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field()
    

@dataclass
class GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    profile: Optional[shared.Profile] = field(default=None)
    get_profile_default_application_json_object: Optional[GetProfileDefaultApplicationJSON] = field(default=None)
    
