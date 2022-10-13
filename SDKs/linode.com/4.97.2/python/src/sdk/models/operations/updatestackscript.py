from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateStackScriptPathParams:
    stackscript_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStackScriptSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateStackScriptSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateStackScriptSecurity:
    option1: Optional[UpdateStackScriptSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateStackScriptSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateStackScriptRequest:
    path_params: UpdateStackScriptPathParams = field(default=None)
    request: Optional[shared.StackScript] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateStackScriptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateStackScriptResponse:
    content_type: str = field(default=None)
    stack_script: Optional[shared.StackScript] = field(default=None)
    status_code: int = field(default=None)
    update_stack_script_default_application_json_object: Optional[UpdateStackScriptDefaultApplicationJSON] = field(default=None)
    
