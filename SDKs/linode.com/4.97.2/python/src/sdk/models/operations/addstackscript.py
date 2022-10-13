from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AddStackScriptRequestBody:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployments_active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_active' }})
    deployments_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_total' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_public' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    mine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mine' }})
    rev_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rev_note' }})
    script: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_defined_fields: Optional[List[shared.UserDefinedField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_defined_fields' }})
    user_gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_gravatar_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class AddStackScriptSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddStackScriptSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddStackScriptSecurity:
    option1: Optional[AddStackScriptSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AddStackScriptSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AddStackScriptRequest:
    request: AddStackScriptRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddStackScriptSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddStackScriptDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AddStackScriptResponse:
    content_type: str = field(default=None)
    stack_script: Optional[shared.StackScript] = field(default=None)
    status_code: int = field(default=None)
    add_stack_script_default_application_json_object: Optional[AddStackScriptDefaultApplicationJSON] = field(default=None)
    
