from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileAppPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileAppSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileAppSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileAppSecurity:
    option1: Optional[GetProfileAppSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileAppSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileAppRequest:
    path_params: GetProfileAppPathParams = field(default=None)
    security: GetProfileAppSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileAppDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileAppResponse:
    authorized_app: Optional[shared.AuthorizedApp] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_profile_app_default_application_json_object: Optional[GetProfileAppDefaultApplicationJSON] = field(default=None)
    
