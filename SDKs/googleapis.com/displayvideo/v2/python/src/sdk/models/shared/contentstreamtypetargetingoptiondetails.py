from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum(str, Enum):
    CONTENT_STREAM_TYPE_UNSPECIFIED = "CONTENT_STREAM_TYPE_UNSPECIFIED"
    CONTENT_LIVE_STREAM = "CONTENT_LIVE_STREAM"
    CONTENT_ON_DEMAND = "CONTENT_ON_DEMAND"


@dataclass_json
@dataclass
class ContentStreamTypeTargetingOptionDetails:
    content_stream_type: Optional[ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentStreamType' }})
    
