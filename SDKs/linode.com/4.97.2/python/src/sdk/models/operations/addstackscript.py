from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AddStackScriptRequestBodyInput:
    images: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    script: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_public') }})
    rev_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rev_note') }})
    

@dataclass
class AddStackScriptSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AddStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AddStackScriptRequest:
    request: AddStackScriptRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddStackScriptSecurity = field()
    

@dataclass
class AddStackScriptResponse:
    content_type: str = field()
    status_code: int = field()
    stack_script: Optional[shared.StackScript] = field(default=None)
    add_stack_script_default_application_json_object: Optional[AddStackScriptDefaultApplicationJSON] = field(default=None)
    
