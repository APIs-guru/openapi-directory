from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mediaproperties


@dataclass_json
@dataclass
class Video:
    properties: Optional[mediaproperties.MediaProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    youtube_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeUri' }})
    
