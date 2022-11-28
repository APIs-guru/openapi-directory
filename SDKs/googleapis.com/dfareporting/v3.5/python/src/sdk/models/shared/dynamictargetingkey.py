from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DynamicTargetingKeyObjectTypeEnum(str, Enum):
    OBJECT_ADVERTISER = "OBJECT_ADVERTISER"
    OBJECT_AD = "OBJECT_AD"
    OBJECT_CREATIVE = "OBJECT_CREATIVE"
    OBJECT_PLACEMENT = "OBJECT_PLACEMENT"


@dataclass_json
@dataclass
class DynamicTargetingKey:
    r"""DynamicTargetingKey
    Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    object_type: Optional[DynamicTargetingKeyObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    
