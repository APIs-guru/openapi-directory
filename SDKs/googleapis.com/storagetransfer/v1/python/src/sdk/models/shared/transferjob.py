from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loggingconfig
from . import notificationconfig
from . import schedule
from . import transferspec

class TransferJobStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class TransferJob:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    deletion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModificationTime' }})
    latest_operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestOperationName' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    status: Optional[TransferJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transfer_spec: Optional[transferspec.TransferSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferSpec' }})
    
