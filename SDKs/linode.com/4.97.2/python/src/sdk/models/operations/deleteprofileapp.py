from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteProfileAppPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProfileAppSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteProfileAppSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProfileAppSecurity:
    option1: Optional[DeleteProfileAppSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteProfileAppSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteProfileAppRequest:
    path_params: DeleteProfileAppPathParams = field(default=None)
    security: DeleteProfileAppSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteProfileAppDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteProfileAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_profile_app_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_profile_app_default_application_json_object: Optional[DeleteProfileAppDefaultApplicationJSON] = field(default=None)
    
