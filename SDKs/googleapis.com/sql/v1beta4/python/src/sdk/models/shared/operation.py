from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import backupcontext
from . import operationerrors
from . import exportcontext
from . import importcontext

class OperationOperationTypeEnum(str, Enum):
    SQL_OPERATION_TYPE_UNSPECIFIED = "SQL_OPERATION_TYPE_UNSPECIFIED"
    IMPORT = "IMPORT"
    EXPORT = "EXPORT"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    RESTART = "RESTART"
    BACKUP = "BACKUP"
    SNAPSHOT = "SNAPSHOT"
    BACKUP_VOLUME = "BACKUP_VOLUME"
    DELETE_VOLUME = "DELETE_VOLUME"
    RESTORE_VOLUME = "RESTORE_VOLUME"
    INJECT_USER = "INJECT_USER"
    CLONE = "CLONE"
    STOP_REPLICA = "STOP_REPLICA"
    START_REPLICA = "START_REPLICA"
    PROMOTE_REPLICA = "PROMOTE_REPLICA"
    CREATE_REPLICA = "CREATE_REPLICA"
    CREATE_USER = "CREATE_USER"
    DELETE_USER = "DELETE_USER"
    UPDATE_USER = "UPDATE_USER"
    CREATE_DATABASE = "CREATE_DATABASE"
    DELETE_DATABASE = "DELETE_DATABASE"
    UPDATE_DATABASE = "UPDATE_DATABASE"
    FAILOVER = "FAILOVER"
    DELETE_BACKUP = "DELETE_BACKUP"
    RECREATE_REPLICA = "RECREATE_REPLICA"
    TRUNCATE_LOG = "TRUNCATE_LOG"
    DEMOTE_MASTER = "DEMOTE_MASTER"
    MAINTENANCE = "MAINTENANCE"
    ENABLE_PRIVATE_IP = "ENABLE_PRIVATE_IP"
    DEFER_MAINTENANCE = "DEFER_MAINTENANCE"
    CREATE_CLONE = "CREATE_CLONE"
    RESCHEDULE_MAINTENANCE = "RESCHEDULE_MAINTENANCE"
    START_EXTERNAL_SYNC = "START_EXTERNAL_SYNC"
    LOG_CLEANUP = "LOG_CLEANUP"
    AUTO_RESTART = "AUTO_RESTART"

class OperationStatusEnum(str, Enum):
    SQL_OPERATION_STATUS_UNSPECIFIED = "SQL_OPERATION_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"


@dataclass_json
@dataclass
class Operation:
    backup_context: Optional[backupcontext.BackupContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupContext' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[operationerrors.OperationErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    export_context: Optional[exportcontext.ExportContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportContext' }})
    import_context: Optional[importcontext.ImportContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importContext' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation_type: Optional[OperationOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationType' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    target_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLink' }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProject' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
