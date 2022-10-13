from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum(str, Enum):
    CONTENT_INSTREAM_POSITION_UNSPECIFIED = "CONTENT_INSTREAM_POSITION_UNSPECIFIED"
    CONTENT_INSTREAM_POSITION_PRE_ROLL = "CONTENT_INSTREAM_POSITION_PRE_ROLL"
    CONTENT_INSTREAM_POSITION_MID_ROLL = "CONTENT_INSTREAM_POSITION_MID_ROLL"
    CONTENT_INSTREAM_POSITION_POST_ROLL = "CONTENT_INSTREAM_POSITION_POST_ROLL"
    CONTENT_INSTREAM_POSITION_UNKNOWN = "CONTENT_INSTREAM_POSITION_UNKNOWN"


@dataclass_json
@dataclass
class ContentInstreamPositionTargetingOptionDetails:
    content_instream_position: Optional[ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentInstreamPosition' }})
    
