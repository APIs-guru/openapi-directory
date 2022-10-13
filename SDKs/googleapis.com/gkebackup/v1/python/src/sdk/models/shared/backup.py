from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clustermetadata
from . import encryptionkey
from . import namespacednames
from . import namespaces

class BackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Backup:
    all_namespaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allNamespaces' }})
    cluster_metadata: Optional[clustermetadata.ClusterMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterMetadata' }})
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeTime' }})
    config_backup_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configBackupSizeBytes' }})
    contains_secrets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsSecrets' }})
    contains_volume_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsVolumeData' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_lock_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteLockDays' }})
    delete_lock_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteLockExpireTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    manual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manual' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pod_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podCount' }})
    resource_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceCount' }})
    retain_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainDays' }})
    retain_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainExpireTime' }})
    selected_applications: Optional[namespacednames.NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedApplications' }})
    selected_namespaces: Optional[namespaces.Namespaces] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedNamespaces' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateReason' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volume_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeCount' }})
    
