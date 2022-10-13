from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudChannelV1MediaTypeEnum(str, Enum):
    MEDIA_TYPE_UNSPECIFIED = "MEDIA_TYPE_UNSPECIFIED"
    MEDIA_TYPE_IMAGE = "MEDIA_TYPE_IMAGE"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Media:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[GoogleCloudChannelV1MediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
