from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpgradeHistoryEntryActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    UPGRADE = "UPGRADE"
    ROLLBACK = "ROLLBACK"

class UpgradeHistoryEntryStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTED = "STARTED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class UpgradeHistoryEntry:
    r"""UpgradeHistoryEntry
    The entry of VM image upgrade history.
    """
    
    action: Optional[UpgradeHistoryEntryActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    snapshot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot') }})
    state: Optional[UpgradeHistoryEntryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    target_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetImage') }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersion') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vm_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    
