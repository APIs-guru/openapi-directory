from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
class ContentInstreamPositionAssignedTargetingOptionDetailsInput:
    r"""ContentInstreamPositionAssignedTargetingOptionDetailsInput
    Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
    """
    
    content_instream_position: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPosition') }})
    

@dataclass_json
@dataclass
class ContentInstreamPositionAssignedTargetingOptionDetails:
    r"""ContentInstreamPositionAssignedTargetingOptionDetails
    Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
    """
    
    ad_type: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adType') }})
    content_instream_position: Optional[ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPosition') }})
    
