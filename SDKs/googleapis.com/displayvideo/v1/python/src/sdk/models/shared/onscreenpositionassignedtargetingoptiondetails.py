from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
class OnScreenPositionAssignedTargetingOptionDetails:
    ad_type: Optional[OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adType' }})
    on_screen_position: Optional[OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onScreenPosition' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
