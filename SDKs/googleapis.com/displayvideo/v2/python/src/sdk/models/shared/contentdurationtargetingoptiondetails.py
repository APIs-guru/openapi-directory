from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentDurationTargetingOptionDetailsContentDurationEnum(str, Enum):
    CONTENT_DURATION_UNSPECIFIED = "CONTENT_DURATION_UNSPECIFIED"
    CONTENT_DURATION_UNKNOWN = "CONTENT_DURATION_UNKNOWN"
    CONTENT_DURATION_0_TO_1_MIN = "CONTENT_DURATION_0_TO_1_MIN"
    CONTENT_DURATION_1_TO_5_MIN = "CONTENT_DURATION_1_TO_5_MIN"
    CONTENT_DURATION_5_TO_15_MIN = "CONTENT_DURATION_5_TO_15_MIN"
    CONTENT_DURATION_15_TO_30_MIN = "CONTENT_DURATION_15_TO_30_MIN"
    CONTENT_DURATION_30_TO_60_MIN = "CONTENT_DURATION_30_TO_60_MIN"
    CONTENT_DURATION_OVER_60_MIN = "CONTENT_DURATION_OVER_60_MIN"


@dataclass_json
@dataclass
class ContentDurationTargetingOptionDetails:
    r"""ContentDurationTargetingOptionDetails
    Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.
    """
    
    content_duration: Optional[ContentDurationTargetingOptionDetailsContentDurationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDuration') }})
    
