from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateProfileSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateProfileDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateProfileRequest:
    request: shared.ProfileInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProfileSecurity = field()
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    profile: Optional[shared.Profile] = field(default=None)
    update_profile_default_application_json_object: Optional[UpdateProfileDefaultApplicationJSON] = field(default=None)
    
