from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import restoreconfig

class RestoreStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Restore:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeTime' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resources_excluded_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesExcludedCount' }})
    resources_failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesFailedCount' }})
    resources_restored_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesRestoredCount' }})
    restore_config: Optional[restoreconfig.RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreConfig' }})
    state: Optional[RestoreStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateReason' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volumes_restored_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumesRestoredCount' }})
    
