from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateUserGrantsPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserGrantsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateUserGrantsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateUserGrantsSecurity:
    option1: Optional[UpdateUserGrantsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateUserGrantsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateUserGrantsRequest:
    path_params: UpdateUserGrantsPathParams = field(default=None)
    request: shared.GrantsResponse = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserGrantsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateUserGrantsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateUserGrantsResponse:
    content_type: str = field(default=None)
    grants_response: Optional[shared.GrantsResponse] = field(default=None)
    status_code: int = field(default=None)
    update_user_grants_default_application_json_object: Optional[UpdateUserGrantsDefaultApplicationJSON] = field(default=None)
    
