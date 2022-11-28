from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteStackScriptPathParams:
    stackscript_id: str = field(metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStackScriptSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteStackScriptRequest:
    path_params: DeleteStackScriptPathParams = field()
    security: DeleteStackScriptSecurity = field()
    

@dataclass
class DeleteStackScriptResponse:
    content_type: str = field()
    status_code: int = field()
    delete_stack_script_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_stack_script_default_application_json_object: Optional[DeleteStackScriptDefaultApplicationJSON] = field(default=None)
    
