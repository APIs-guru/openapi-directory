from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum(str, Enum):
    NATIVE_CONTENT_POSITION_UNSPECIFIED = "NATIVE_CONTENT_POSITION_UNSPECIFIED"
    NATIVE_CONTENT_POSITION_UNKNOWN = "NATIVE_CONTENT_POSITION_UNKNOWN"
    NATIVE_CONTENT_POSITION_IN_ARTICLE = "NATIVE_CONTENT_POSITION_IN_ARTICLE"
    NATIVE_CONTENT_POSITION_IN_FEED = "NATIVE_CONTENT_POSITION_IN_FEED"
    NATIVE_CONTENT_POSITION_PERIPHERAL = "NATIVE_CONTENT_POSITION_PERIPHERAL"
    NATIVE_CONTENT_POSITION_RECOMMENDATION = "NATIVE_CONTENT_POSITION_RECOMMENDATION"


@dataclass_json
@dataclass
class NativeContentPositionAssignedTargetingOptionDetails:
    content_position: Optional[NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentPosition' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
