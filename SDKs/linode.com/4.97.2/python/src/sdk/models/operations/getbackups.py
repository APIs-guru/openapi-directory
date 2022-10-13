from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetBackupsPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBackupsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetBackupsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBackupsSecurity:
    option1: Optional[GetBackupsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetBackupsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetBackupsRequest:
    path_params: GetBackupsPathParams = field(default=None)
    security: GetBackupsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSONAutomaticDisks:
    filesystem: Optional[shared.FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
class GetBackups200ApplicationJSONAutomaticStatusEnum(str, Enum):
    PAUSED = "paused"
    PENDING = "pending"
    RUNNING = "running"
    NEEDS_POST_PROCESSING = "needsPostProcessing"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    USER_ABORTED = "userAborted"


@dataclass_json
@dataclass
class GetBackups200ApplicationJSONAutomatic:
    configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disks: Optional[List[GetBackups200ApplicationJSONAutomaticDisks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    status: Optional[GetBackups200ApplicationJSONAutomaticStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSONSnapshot:
    current: Optional[shared.Backup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    in_progress: Optional[shared.Backup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_progress' }})
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSON:
    automatic: Optional[List[GetBackups200ApplicationJSONAutomatic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic' }})
    snapshot: Optional[GetBackups200ApplicationJSONSnapshot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot' }})
    

@dataclass_json
@dataclass
class GetBackupsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetBackupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_backups_200_application_json_object: Optional[GetBackups200ApplicationJSON] = field(default=None)
    get_backups_default_application_json_object: Optional[GetBackupsDefaultApplicationJSON] = field(default=None)
    
