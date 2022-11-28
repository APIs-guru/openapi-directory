from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteProfileAppPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProfileAppSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteProfileAppDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteProfileAppRequest:
    path_params: DeleteProfileAppPathParams = field()
    security: DeleteProfileAppSecurity = field()
    

@dataclass
class DeleteProfileAppResponse:
    content_type: str = field()
    status_code: int = field()
    delete_profile_app_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_profile_app_default_application_json_object: Optional[DeleteProfileAppDefaultApplicationJSON] = field(default=None)
    
