from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Backup
    Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
    """
    
    all_namespaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allNamespaces') }})
    cluster_metadata: Optional[ClusterMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterMetadata') }})
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime') }})
    config_backup_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configBackupSizeBytes') }})
    contains_secrets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsSecrets') }})
    contains_volume_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsVolumeData') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_lock_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteLockDays') }})
    delete_lock_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteLockExpireTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    manual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manual') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pod_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podCount') }})
    resource_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceCount') }})
    retain_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainDays') }})
    retain_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainExpireTime') }})
    selected_applications: Optional[NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedApplications') }})
    selected_namespaces: Optional[Namespaces] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNamespaces') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateReason') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volume_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeCount') }})
    

@dataclass_json
@dataclass
class BackupInput:
    r"""BackupInput
    Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
    """
    
    cluster_metadata: Optional[ClusterMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterMetadata') }})
    delete_lock_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteLockDays') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    retain_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainDays') }})
    selected_applications: Optional[NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedApplications') }})
    selected_namespaces: Optional[Namespaces] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNamespaces') }})
    
