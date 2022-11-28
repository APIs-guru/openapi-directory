from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum(str, Enum):
    CONTENT_STREAM_TYPE_UNSPECIFIED = "CONTENT_STREAM_TYPE_UNSPECIFIED"
    CONTENT_LIVE_STREAM = "CONTENT_LIVE_STREAM"
    CONTENT_ON_DEMAND = "CONTENT_ON_DEMAND"


@dataclass_json
@dataclass
class ContentStreamTypeTargetingOptionDetails:
    r"""ContentStreamTypeTargetingOptionDetails
    Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
    """
    
    content_stream_type: Optional[ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamType') }})
    
