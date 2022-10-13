from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    content_outstream_position: Optional[ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOutstreamPosition' }})
    
