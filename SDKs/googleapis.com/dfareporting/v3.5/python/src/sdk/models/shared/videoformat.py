from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoFormatFileTypeEnum(str, Enum):
    FLV = "FLV"
    THREEGPP = "THREEGPP"
    MP4 = "MP4"
    WEBM = "WEBM"
    M3_U8 = "M3U8"


@dataclass_json
@dataclass
class VideoFormat:
    r"""VideoFormat
    Contains information about supported video formats.
    """
    
    file_type: Optional[VideoFormatFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    resolution: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    target_bit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBitRate') }})
    
