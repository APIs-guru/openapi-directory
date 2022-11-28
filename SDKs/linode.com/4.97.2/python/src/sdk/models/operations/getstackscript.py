from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetStackScriptPathParams:
    stackscript_id: str = field(metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStackScriptSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetStackScriptRequest:
    path_params: GetStackScriptPathParams = field()
    security: GetStackScriptSecurity = field()
    

@dataclass
class GetStackScriptResponse:
    content_type: str = field()
    status_code: int = field()
    stack_script: Optional[shared.StackScript] = field(default=None)
    get_stack_script_default_application_json_object: Optional[GetStackScriptDefaultApplicationJSON] = field(default=None)
    
