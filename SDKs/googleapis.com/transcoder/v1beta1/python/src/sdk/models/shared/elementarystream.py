from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ElementaryStream:
    r"""ElementaryStream
    Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
    """
    
    audio_stream: Optional[AudioStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioStream') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    text_stream: Optional[TextStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStream') }})
    video_stream: Optional[VideoStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoStream') }})
    
