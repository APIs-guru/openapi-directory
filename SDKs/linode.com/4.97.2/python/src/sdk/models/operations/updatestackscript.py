from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateStackScriptPathParams:
    stackscript_id: str = field(metadata={'path_param': { 'field_name': 'stackscriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStackScriptSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateStackScriptRequest:
    path_params: UpdateStackScriptPathParams = field()
    security: UpdateStackScriptSecurity = field()
    request: Optional[shared.StackScriptInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStackScriptResponse:
    content_type: str = field()
    status_code: int = field()
    stack_script: Optional[shared.StackScript] = field(default=None)
    update_stack_script_default_application_json_object: Optional[UpdateStackScriptDefaultApplicationJSON] = field(default=None)
    
