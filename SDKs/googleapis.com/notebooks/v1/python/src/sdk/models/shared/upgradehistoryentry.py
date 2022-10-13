from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    action: Optional[UpgradeHistoryEntryActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    snapshot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot' }})
    state: Optional[UpgradeHistoryEntryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetImage' }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetVersion' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vm_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmImage' }})
    
