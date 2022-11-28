from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ContentOutstreamPositionAssignedTargetingOptionDetails
    Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
    """
    
    ad_type: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adType') }})
    content_outstream_position: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPosition') }})
    

@dataclass_json
@dataclass
class ContentOutstreamPositionAssignedTargetingOptionDetailsInput:
    r"""ContentOutstreamPositionAssignedTargetingOptionDetailsInput
    Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
    """
    
    content_outstream_position: Optional[ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPosition') }})
    
