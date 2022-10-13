from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateProfileSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateProfileSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateProfileSecurity:
    option1: Optional[UpdateProfileSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateProfileSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateProfileRequest:
    request: shared.Profile = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProfileSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateProfileDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field(default=None)
    profile: Optional[shared.Profile] = field(default=None)
    status_code: int = field(default=None)
    update_profile_default_application_json_object: Optional[UpdateProfileDefaultApplicationJSON] = field(default=None)
    
