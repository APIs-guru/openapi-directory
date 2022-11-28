from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NativeContentPositionTargetingOptionDetailsContentPositionEnum(str, Enum):
    NATIVE_CONTENT_POSITION_UNSPECIFIED = "NATIVE_CONTENT_POSITION_UNSPECIFIED"
    NATIVE_CONTENT_POSITION_UNKNOWN = "NATIVE_CONTENT_POSITION_UNKNOWN"
    NATIVE_CONTENT_POSITION_IN_ARTICLE = "NATIVE_CONTENT_POSITION_IN_ARTICLE"
    NATIVE_CONTENT_POSITION_IN_FEED = "NATIVE_CONTENT_POSITION_IN_FEED"
    NATIVE_CONTENT_POSITION_PERIPHERAL = "NATIVE_CONTENT_POSITION_PERIPHERAL"
    NATIVE_CONTENT_POSITION_RECOMMENDATION = "NATIVE_CONTENT_POSITION_RECOMMENDATION"


@dataclass_json
@dataclass
class NativeContentPositionTargetingOptionDetails:
    r"""NativeContentPositionTargetingOptionDetails
    Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.
    """
    
    content_position: Optional[NativeContentPositionTargetingOptionDetailsContentPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentPosition') }})
    
