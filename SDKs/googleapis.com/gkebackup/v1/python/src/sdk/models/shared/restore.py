from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RestoreStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class RestoreInput:
    r"""RestoreInput
    Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    restore_config: Optional[RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreConfig') }})
    

@dataclass_json
@dataclass
class Restore:
    r"""Restore
    Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    complete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resources_excluded_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesExcludedCount') }})
    resources_failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesFailedCount') }})
    resources_restored_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesRestoredCount') }})
    restore_config: Optional[RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreConfig') }})
    state: Optional[RestoreStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateReason') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes_restored_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumesRestoredCount') }})
    
