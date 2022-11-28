from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BackupRunBackupKindEnum(str, Enum):
    SQL_BACKUP_KIND_UNSPECIFIED = "SQL_BACKUP_KIND_UNSPECIFIED"
    SNAPSHOT = "SNAPSHOT"
    PHYSICAL = "PHYSICAL"

class BackupRunStatusEnum(str, Enum):
    SQL_BACKUP_RUN_STATUS_UNSPECIFIED = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
    ENQUEUED = "ENQUEUED"
    OVERDUE = "OVERDUE"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCESSFUL = "SUCCESSFUL"
    SKIPPED = "SKIPPED"
    DELETION_PENDING = "DELETION_PENDING"
    DELETION_FAILED = "DELETION_FAILED"
    DELETED = "DELETED"

class BackupRunTypeEnum(str, Enum):
    SQL_BACKUP_RUN_TYPE_UNSPECIFIED = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
    AUTOMATED = "AUTOMATED"
    ON_DEMAND = "ON_DEMAND"


@dataclass_json
@dataclass
class BackupRun:
    r"""BackupRun
    A BackupRun resource.
    """
    
    backup_kind: Optional[BackupRunBackupKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupKind') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_encryption_configuration: Optional[DiskEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionConfiguration') }})
    disk_encryption_status: Optional[DiskEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionStatus') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    enqueued_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enqueuedTime') }})
    error: Optional[OperationError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[BackupRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    type: Optional[BackupRunTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    window_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowStartTime') }})
    
