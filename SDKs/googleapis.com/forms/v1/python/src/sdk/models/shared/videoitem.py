from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import video


@dataclass_json
@dataclass
class VideoItem:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    video: Optional[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
