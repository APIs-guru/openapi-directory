from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetBackupsPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBackupsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSONAutomaticDisks:
    filesystem: Optional[shared.FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesystem') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
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
    configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disks: Optional[List[GetBackups200ApplicationJSONAutomaticDisks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    status: Optional[GetBackups200ApplicationJSONAutomaticStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSONSnapshot:
    current: Optional[shared.Backup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    in_progress: Optional[shared.Backup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_progress') }})
    

@dataclass_json
@dataclass
class GetBackups200ApplicationJSON:
    automatic: Optional[List[GetBackups200ApplicationJSONAutomatic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic') }})
    snapshot: Optional[GetBackups200ApplicationJSONSnapshot] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot') }})
    

@dataclass_json
@dataclass
class GetBackupsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetBackupsRequest:
    path_params: GetBackupsPathParams = field()
    security: GetBackupsSecurity = field()
    

@dataclass
class GetBackupsResponse:
    content_type: str = field()
    status_code: int = field()
    get_backups_200_application_json_object: Optional[GetBackups200ApplicationJSON] = field(default=None)
    get_backups_default_application_json_object: Optional[GetBackupsDefaultApplicationJSON] = field(default=None)
    
