from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum(str, Enum):
    CONTENT_OUTSTREAM_POSITION_UNSPECIFIED = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED"
    CONTENT_OUTSTREAM_POSITION_UNKNOWN = "CONTENT_OUTSTREAM_POSITION_UNKNOWN"
    CONTENT_OUTSTREAM_POSITION_IN_ARTICLE = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE"
    CONTENT_OUTSTREAM_POSITION_IN_BANNER = "CONTENT_OUTSTREAM_POSITION_IN_BANNER"
    CONTENT_OUTSTREAM_POSITION_IN_FEED = "CONTENT_OUTSTREAM_POSITION_IN_FEED"
    CONTENT_OUTSTREAM_POSITION_INTERSTITIAL = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"


@dataclass_json
@dataclass
class ContentOutstreamPositionTargetingOptionDetails:
    r"""ContentOutstreamPositionTargetingOptionDetails
    Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
    """
    
    content_outstream_position: Optional[ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPosition') }})
    
