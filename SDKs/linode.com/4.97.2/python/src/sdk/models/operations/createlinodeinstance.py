from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateLinodeInstanceRequestBody:
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_keys') }})
    authorized_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_users') }})
    backup_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_id') }})
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups_enabled') }})
    booted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booted') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    interfaces: Optional[List[shared.LinodeConfigInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaces') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_ip') }})
    root_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_pass') }})
    stackscript_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_data') }})
    stackscript_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript_id') }})
    swap_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swap_size') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateLinodeInstanceRequest:
    request: CreateLinodeInstanceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLinodeInstanceSecurity = field()
    

@dataclass
class CreateLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    linode: Optional[shared.Linode] = field(default=None)
    create_linode_instance_default_application_json_object: Optional[CreateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
