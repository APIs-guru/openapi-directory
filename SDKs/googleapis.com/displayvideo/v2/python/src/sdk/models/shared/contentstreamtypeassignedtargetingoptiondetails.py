from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum(str, Enum):
    CONTENT_STREAM_TYPE_UNSPECIFIED = "CONTENT_STREAM_TYPE_UNSPECIFIED"
    CONTENT_LIVE_STREAM = "CONTENT_LIVE_STREAM"
    CONTENT_ON_DEMAND = "CONTENT_ON_DEMAND"


@dataclass_json
@dataclass
class ContentStreamTypeAssignedTargetingOptionDetails:
    content_stream_type: Optional[ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentStreamType' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
