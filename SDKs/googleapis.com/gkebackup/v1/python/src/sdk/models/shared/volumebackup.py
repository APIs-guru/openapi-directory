from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import namespacedname

class VolumeBackupFormatEnum(str, Enum):
    VOLUME_BACKUP_FORMAT_UNSPECIFIED = "VOLUME_BACKUP_FORMAT_UNSPECIFIED"
    GCE_PERSISTENT_DISK = "GCE_PERSISTENT_DISK"

class VolumeBackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    SNAPSHOTTING = "SNAPSHOTTING"
    UPLOADING = "UPLOADING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class VolumeBackup:
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeTime' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    disk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeBytes' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    format: Optional[VolumeBackupFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_pvc: Optional[namespacedname.NamespacedName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePvc' }})
    state: Optional[VolumeBackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    storage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageBytes' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volume_backup_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeBackupHandle' }})
    
