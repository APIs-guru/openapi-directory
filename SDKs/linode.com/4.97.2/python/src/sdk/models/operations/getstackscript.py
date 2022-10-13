from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetStackScriptPathParams:
    stackscript_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStackScriptSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetStackScriptSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStackScriptSecurity:
    option1: Optional[GetStackScriptSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetStackScriptSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetStackScriptRequest:
    path_params: GetStackScriptPathParams = field(default=None)
    security: GetStackScriptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetStackScriptResponse:
    content_type: str = field(default=None)
    stack_script: Optional[shared.StackScript] = field(default=None)
    status_code: int = field(default=None)
    get_stack_script_default_application_json_object: Optional[GetStackScriptDefaultApplicationJSON] = field(default=None)
    
