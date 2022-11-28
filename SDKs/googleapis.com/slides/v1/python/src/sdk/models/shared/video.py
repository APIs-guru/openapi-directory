from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    YOUTUBE = "YOUTUBE"
    DRIVE = "DRIVE"


@dataclass_json
@dataclass
class Video:
    r"""Video
    A PageElement kind representing a video.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source: Optional[VideoSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    video_properties: Optional[VideoProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoProperties') }})
    
