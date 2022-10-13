from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import videoproperties

class VideoSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    YOUTUBE = "YOUTUBE"
    DRIVE = "DRIVE"


@dataclass_json
@dataclass
class Video:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    source: Optional[VideoSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    video_properties: Optional[videoproperties.VideoProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoProperties' }})
    
