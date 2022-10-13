from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import diskencryptionconfiguration
from . import diskencryptionstatus
from . import operationerror

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
    backup_kind: Optional[BackupRunBackupKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupKind' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_encryption_configuration: Optional[diskencryptionconfiguration.DiskEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskEncryptionConfiguration' }})
    disk_encryption_status: Optional[diskencryptionstatus.DiskEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskEncryptionStatus' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    enqueued_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enqueuedTime' }})
    error: Optional[operationerror.OperationError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[BackupRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    type: Optional[BackupRunTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    window_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowStartTime' }})
    
