from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum(str, Enum):
    AD_TYPE_UNSPECIFIED = "AD_TYPE_UNSPECIFIED"
    AD_TYPE_DISPLAY = "AD_TYPE_DISPLAY"
    AD_TYPE_VIDEO = "AD_TYPE_VIDEO"
    AD_TYPE_AUDIO = "AD_TYPE_AUDIO"

class ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum(str, Enum):
    CONTENT_INSTREAM_POSITION_UNSPECIFIED = "CONTENT_INSTREAM_POSITION_UNSPECIFIED"
    CONTENT_INSTREAM_POSITION_PRE_ROLL = "CONTENT_INSTREAM_POSITION_PRE_ROLL"
    CONTENT_INSTREAM_POSITION_MID_ROLL = "CONTENT_INSTREAM_POSITION_MID_ROLL"
    CONTENT_INSTREAM_POSITION_POST_ROLL = "CONTENT_INSTREAM_POSITION_POST_ROLL"
    CONTENT_INSTREAM_POSITION_UNKNOWN = "CONTENT_INSTREAM_POSITION_UNKNOWN"


@dataclass_json
@dataclass
class ContentInstreamPositionAssignedTargetingOptionDetails:
    ad_type: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adType' }})
    content_instream_position: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentInstreamPosition' }})
    
