from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum(str, Enum):
    AD_TYPE_UNSPECIFIED = "AD_TYPE_UNSPECIFIED"
    AD_TYPE_DISPLAY = "AD_TYPE_DISPLAY"
    AD_TYPE_VIDEO = "AD_TYPE_VIDEO"
    AD_TYPE_AUDIO = "AD_TYPE_AUDIO"

class ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum(str, Enum):
    CONTENT_OUTSTREAM_POSITION_UNSPECIFIED = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED"
    CONTENT_OUTSTREAM_POSITION_UNKNOWN = "CONTENT_OUTSTREAM_POSITION_UNKNOWN"
    CONTENT_OUTSTREAM_POSITION_IN_ARTICLE = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE"
    CONTENT_OUTSTREAM_POSITION_IN_BANNER = "CONTENT_OUTSTREAM_POSITION_IN_BANNER"
    CONTENT_OUTSTREAM_POSITION_IN_FEED = "CONTENT_OUTSTREAM_POSITION_IN_FEED"
    CONTENT_OUTSTREAM_POSITION_INTERSTITIAL = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"


@dataclass_json
@dataclass
class ContentOutstreamPositionAssignedTargetingOptionDetails:
    ad_type: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adType' }})
    content_outstream_position: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOutstreamPosition' }})
    
