from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileGrantsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileGrantsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileGrantsSecurity:
    option1: Optional[GetProfileGrantsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileGrantsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileGrantsRequest:
    security: GetProfileGrantsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileGrantsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileGrantsResponse:
    content_type: str = field(default=None)
    grants_response: Optional[shared.GrantsResponse] = field(default=None)
    status_code: int = field(default=None)
    get_profile_grants_default_application_json_object: Optional[GetProfileGrantsDefaultApplicationJSON] = field(default=None)
    
