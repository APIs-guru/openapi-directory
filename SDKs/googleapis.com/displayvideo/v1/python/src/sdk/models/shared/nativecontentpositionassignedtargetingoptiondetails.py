from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""NativeContentPositionAssignedTargetingOptionDetails
    Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
    """
    
    content_position: Optional[NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentPosition') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
