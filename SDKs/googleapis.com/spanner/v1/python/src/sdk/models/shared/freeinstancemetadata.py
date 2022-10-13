from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FreeInstanceMetadataExpireBehaviorEnum(str, Enum):
    EXPIRE_BEHAVIOR_UNSPECIFIED = "EXPIRE_BEHAVIOR_UNSPECIFIED"
    FREE_TO_PROVISIONED = "FREE_TO_PROVISIONED"
    REMOVE_AFTER_GRACE_PERIOD = "REMOVE_AFTER_GRACE_PERIOD"


@dataclass_json
@dataclass
class FreeInstanceMetadata:
    expire_behavior: Optional[FreeInstanceMetadataExpireBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireBehavior' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    upgrade_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeTime' }})
    
