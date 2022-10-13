from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import videoformat


@dataclass_json
@dataclass
class VideoFormatsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    video_formats: Optional[List[videoformat.VideoFormat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoFormats' }})
    
