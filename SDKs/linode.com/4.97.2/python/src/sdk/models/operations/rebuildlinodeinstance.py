from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RebuildLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RebuildLinodeInstanceRequestBody:
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    root_pass: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_pass') }})
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_keys') }})
    authorized_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_users') }})
    booted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booted') }})
    stackscript_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_data') }})
    stackscript_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_id') }})
    

@dataclass
class RebuildLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RebuildLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RebuildLinodeInstanceRequest:
    path_params: RebuildLinodeInstancePathParams = field()
    request: RebuildLinodeInstanceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: RebuildLinodeInstanceSecurity = field()
    

@dataclass
class RebuildLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    linode: Optional[shared.Linode] = field(default=None)
    rebuild_linode_instance_default_application_json_object: Optional[RebuildLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
