from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackupDisks:
    filesystem: Optional[FilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesystem') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
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
    r"""Backup
    An object representing a Backup or snapshot for a Linode with Backup service enabled.
    
    """
    
    configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disks: Optional[List[BackupDisks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    status: Optional[BackupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[BackupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
