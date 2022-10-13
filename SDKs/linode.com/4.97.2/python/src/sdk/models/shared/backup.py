from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filesystem_enum


@dataclass_json
@dataclass
class BackupDisks:
    filesystem: Optional[filesystem_enum.FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
class BackupStatusEnum(str, Enum):
    PAUSED = "paused"
    PENDING = "pending"
    RUNNING = "running"
    NEEDS_POST_PROCESSING = "needsPostProcessing"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    USER_ABORTED = "userAborted"

class BackupTypeEnum(str, Enum):
    AUTO = "auto"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class Backup:
    configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disks: Optional[List[BackupDisks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    status: Optional[BackupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[BackupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
