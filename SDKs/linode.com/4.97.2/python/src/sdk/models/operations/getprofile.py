from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileSecurity:
    option1: Optional[GetProfileSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileResponse:
    content_type: str = field(default=None)
    profile: Optional[shared.Profile] = field(default=None)
    status_code: int = field(default=None)
    get_profile_default_application_json_object: Optional[GetProfileDefaultApplicationJSON] = field(default=None)
    
