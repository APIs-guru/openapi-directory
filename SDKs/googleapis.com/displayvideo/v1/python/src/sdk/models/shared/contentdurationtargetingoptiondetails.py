from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    content_duration: Optional[ContentDurationTargetingOptionDetailsContentDurationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDuration' }})
    
