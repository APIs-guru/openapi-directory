from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum(str, Enum):
    AD_TYPE_UNSPECIFIED = "AD_TYPE_UNSPECIFIED"
    AD_TYPE_DISPLAY = "AD_TYPE_DISPLAY"
    AD_TYPE_VIDEO = "AD_TYPE_VIDEO"
    AD_TYPE_AUDIO = "AD_TYPE_AUDIO"

class OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum(str, Enum):
    ON_SCREEN_POSITION_UNSPECIFIED = "ON_SCREEN_POSITION_UNSPECIFIED"
    ON_SCREEN_POSITION_UNKNOWN = "ON_SCREEN_POSITION_UNKNOWN"
    ON_SCREEN_POSITION_ABOVE_THE_FOLD = "ON_SCREEN_POSITION_ABOVE_THE_FOLD"
    ON_SCREEN_POSITION_BELOW_THE_FOLD = "ON_SCREEN_POSITION_BELOW_THE_FOLD"


@dataclass_json
@dataclass
class OnScreenPositionAssignedTargetingOptionDetailsInput:
    r"""OnScreenPositionAssignedTargetingOptionDetailsInput
    On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
    """
    
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class OnScreenPositionAssignedTargetingOptionDetails:
    r"""OnScreenPositionAssignedTargetingOptionDetails
    On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
    """
    
    ad_type: Optional[OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adType') }})
    on_screen_position: Optional[OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPosition') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
