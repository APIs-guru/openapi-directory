from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteStackScriptPathParams:
    stackscript_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStackScriptSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteStackScriptSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteStackScriptSecurity:
    option1: Optional[DeleteStackScriptSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteStackScriptSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteStackScriptRequest:
    path_params: DeleteStackScriptPathParams = field(default=None)
    security: DeleteStackScriptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteStackScriptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_stack_script_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_stack_script_default_application_json_object: Optional[DeleteStackScriptDefaultApplicationJSON] = field(default=None)
    
