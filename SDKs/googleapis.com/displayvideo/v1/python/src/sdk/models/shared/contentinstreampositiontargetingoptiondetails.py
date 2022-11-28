from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum(str, Enum):
    CONTENT_INSTREAM_POSITION_UNSPECIFIED = "CONTENT_INSTREAM_POSITION_UNSPECIFIED"
    CONTENT_INSTREAM_POSITION_PRE_ROLL = "CONTENT_INSTREAM_POSITION_PRE_ROLL"
    CONTENT_INSTREAM_POSITION_MID_ROLL = "CONTENT_INSTREAM_POSITION_MID_ROLL"
    CONTENT_INSTREAM_POSITION_POST_ROLL = "CONTENT_INSTREAM_POSITION_POST_ROLL"
    CONTENT_INSTREAM_POSITION_UNKNOWN = "CONTENT_INSTREAM_POSITION_UNKNOWN"


@dataclass_json
@dataclass
class ContentInstreamPositionTargetingOptionDetails:
    r"""ContentInstreamPositionTargetingOptionDetails
    Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
    """
    
    content_instream_position: Optional[ContentInstreamPositionTargetingOptionDetailsContentInstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPosition') }})
    
