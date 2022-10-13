from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CloneLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneLinodeInstanceRequestBody:
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups_enabled' }})
    configs: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    disks: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CloneLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CloneLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneLinodeInstanceSecurity:
    option1: Optional[CloneLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloneLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloneLinodeInstanceRequest:
    path_params: CloneLinodeInstancePathParams = field(default=None)
    request: CloneLinodeInstanceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CloneLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CloneLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CloneLinodeInstanceResponse:
    content_type: str = field(default=None)
    linode: Optional[shared.Linode] = field(default=None)
    status_code: int = field(default=None)
    clone_linode_instance_default_application_json_object: Optional[CloneLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
