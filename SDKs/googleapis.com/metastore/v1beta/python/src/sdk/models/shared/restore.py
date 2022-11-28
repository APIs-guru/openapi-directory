from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RestoreStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"

class RestoreTypeEnum(str, Enum):
    RESTORE_TYPE_UNSPECIFIED = "RESTORE_TYPE_UNSPECIFIED"
    FULL = "FULL"
    METADATA_ONLY = "METADATA_ONLY"


@dataclass_json
@dataclass
class Restore:
    r"""Restore
    The details of a metadata restore operation.
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[RestoreStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[RestoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
