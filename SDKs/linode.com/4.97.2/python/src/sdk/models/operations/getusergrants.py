from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserGrantsPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserGrantsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUserGrantsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserGrantsSecurity:
    option1: Optional[GetUserGrantsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserGrantsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserGrantsRequest:
    path_params: GetUserGrantsPathParams = field(default=None)
    security: GetUserGrantsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserGrantsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetUserGrantsResponse:
    content_type: str = field(default=None)
    grants_response: Optional[shared.GrantsResponse] = field(default=None)
    status_code: int = field(default=None)
    get_user_grants_default_application_json_object: Optional[GetUserGrantsDefaultApplicationJSON] = field(default=None)
    
