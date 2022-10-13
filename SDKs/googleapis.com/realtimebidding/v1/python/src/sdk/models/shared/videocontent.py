from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import videometadata


@dataclass_json
@dataclass
class VideoContent:
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoMetadata' }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoUrl' }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoVastXml' }})
    
