from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CloneLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneLinodeInstanceRequestBody:
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups_enabled') }})
    configs: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    disks: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    

@dataclass
class CloneLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CloneLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CloneLinodeInstanceRequest:
    path_params: CloneLinodeInstancePathParams = field()
    request: CloneLinodeInstanceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CloneLinodeInstanceSecurity = field()
    

@dataclass
class CloneLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    linode: Optional[shared.Linode] = field(default=None)
    clone_linode_instance_default_application_json_object: Optional[CloneLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
