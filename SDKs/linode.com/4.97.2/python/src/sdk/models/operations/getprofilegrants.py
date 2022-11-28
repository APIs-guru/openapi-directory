from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProfileGrantsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetProfileGrantsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetProfileGrantsRequest:
    security: GetProfileGrantsSecurity = field()
    

@dataclass
class GetProfileGrantsResponse:
    content_type: str = field()
    status_code: int = field()
    grants_response: Optional[shared.GrantsResponse] = field(default=None)
    get_profile_grants_default_application_json_object: Optional[GetProfileGrantsDefaultApplicationJSON] = field(default=None)
    
