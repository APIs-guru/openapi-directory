from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ManagementSettingsRenewalMethodEnum(str, Enum):
    RENEWAL_METHOD_UNSPECIFIED = "RENEWAL_METHOD_UNSPECIFIED"
    AUTOMATIC_RENEWAL = "AUTOMATIC_RENEWAL"
    MANUAL_RENEWAL = "MANUAL_RENEWAL"

class ManagementSettingsTransferLockStateEnum(str, Enum):
    TRANSFER_LOCK_STATE_UNSPECIFIED = "TRANSFER_LOCK_STATE_UNSPECIFIED"
    UNLOCKED = "UNLOCKED"
    LOCKED = "LOCKED"


@dataclass_json
@dataclass
class ManagementSettings:
    renewal_method: Optional[ManagementSettingsRenewalMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalMethod' }})
    transfer_lock_state: Optional[ManagementSettingsTransferLockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferLockState' }})
    
