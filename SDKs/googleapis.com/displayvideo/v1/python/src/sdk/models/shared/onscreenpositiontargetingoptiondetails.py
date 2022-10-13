from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum(str, Enum):
    ON_SCREEN_POSITION_UNSPECIFIED = "ON_SCREEN_POSITION_UNSPECIFIED"
    ON_SCREEN_POSITION_UNKNOWN = "ON_SCREEN_POSITION_UNKNOWN"
    ON_SCREEN_POSITION_ABOVE_THE_FOLD = "ON_SCREEN_POSITION_ABOVE_THE_FOLD"
    ON_SCREEN_POSITION_BELOW_THE_FOLD = "ON_SCREEN_POSITION_BELOW_THE_FOLD"


@dataclass_json
@dataclass
class OnScreenPositionTargetingOptionDetails:
    on_screen_position: Optional[OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onScreenPosition' }})
    
