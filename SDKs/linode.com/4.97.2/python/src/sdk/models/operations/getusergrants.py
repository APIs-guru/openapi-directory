from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserGrantsPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserGrantsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetUserGrantsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetUserGrantsRequest:
    path_params: GetUserGrantsPathParams = field()
    security: GetUserGrantsSecurity = field()
    

@dataclass
class GetUserGrantsResponse:
    content_type: str = field()
    status_code: int = field()
    grants_response: Optional[shared.GrantsResponse] = field(default=None)
    get_user_grants_default_application_json_object: Optional[GetUserGrantsDefaultApplicationJSON] = field(default=None)
    
