from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoLink:
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayText' }})
    youtube_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeUri' }})
    
