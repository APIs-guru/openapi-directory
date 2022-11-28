from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum(str, Enum):
    ON_SCREEN_POSITION_UNSPECIFIED = "ON_SCREEN_POSITION_UNSPECIFIED"
    ON_SCREEN_POSITION_UNKNOWN = "ON_SCREEN_POSITION_UNKNOWN"
    ON_SCREEN_POSITION_ABOVE_THE_FOLD = "ON_SCREEN_POSITION_ABOVE_THE_FOLD"
    ON_SCREEN_POSITION_BELOW_THE_FOLD = "ON_SCREEN_POSITION_BELOW_THE_FOLD"


@dataclass_json
@dataclass
class OnScreenPositionTargetingOptionDetails:
    r"""OnScreenPositionTargetingOptionDetails
    Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
    """
    
    on_screen_position: Optional[OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPosition') }})
    
