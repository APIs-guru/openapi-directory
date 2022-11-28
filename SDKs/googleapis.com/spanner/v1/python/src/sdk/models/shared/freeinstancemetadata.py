from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FreeInstanceMetadataExpireBehaviorEnum(str, Enum):
    EXPIRE_BEHAVIOR_UNSPECIFIED = "EXPIRE_BEHAVIOR_UNSPECIFIED"
    FREE_TO_PROVISIONED = "FREE_TO_PROVISIONED"
    REMOVE_AFTER_GRACE_PERIOD = "REMOVE_AFTER_GRACE_PERIOD"


@dataclass_json
@dataclass
class FreeInstanceMetadata:
    r"""FreeInstanceMetadata
    Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
    """
    
    expire_behavior: Optional[FreeInstanceMetadataExpireBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireBehavior') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    upgrade_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeTime') }})
    

@dataclass_json
@dataclass
class FreeInstanceMetadataInput:
    r"""FreeInstanceMetadataInput
    Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
    """
    
    expire_behavior: Optional[FreeInstanceMetadataExpireBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireBehavior') }})
    
