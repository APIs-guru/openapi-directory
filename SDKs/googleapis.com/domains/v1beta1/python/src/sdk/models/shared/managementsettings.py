from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
class ManagementSettingsInput:
    r"""ManagementSettingsInput
    Defines renewal, billing, and transfer settings for a `Registration`.
    """
    
    transfer_lock_state: Optional[ManagementSettingsTransferLockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferLockState') }})
    

@dataclass_json
@dataclass
class ManagementSettings:
    r"""ManagementSettings
    Defines renewal, billing, and transfer settings for a `Registration`.
    """
    
    renewal_method: Optional[ManagementSettingsRenewalMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalMethod') }})
    transfer_lock_state: Optional[ManagementSettingsTransferLockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferLockState') }})
    
