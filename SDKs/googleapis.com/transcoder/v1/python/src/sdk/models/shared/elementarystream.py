from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import audiostream
from . import textstream
from . import videostream


@dataclass_json
@dataclass
class ElementaryStream:
    audio_stream: Optional[audiostream.AudioStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioStream' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    text_stream: Optional[textstream.TextStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStream' }})
    video_stream: Optional[videostream.VideoStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoStream' }})
    
