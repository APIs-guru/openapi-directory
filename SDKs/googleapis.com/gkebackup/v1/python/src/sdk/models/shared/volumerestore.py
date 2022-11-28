from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VolumeRestoreStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RESTORING = "RESTORING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"

class VolumeRestoreVolumeTypeEnum(str, Enum):
    VOLUME_TYPE_UNSPECIFIED = "VOLUME_TYPE_UNSPECIFIED"
    GCE_PERSISTENT_DISK = "GCE_PERSISTENT_DISK"


@dataclass_json
@dataclass
class VolumeRestore:
    r"""VolumeRestore
    Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
    """
    
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[VolumeRestoreStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    target_pvc: Optional[NamespacedName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPvc') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volume_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBackup') }})
    volume_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeHandle') }})
    volume_type: Optional[VolumeRestoreVolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeType') }})
    
