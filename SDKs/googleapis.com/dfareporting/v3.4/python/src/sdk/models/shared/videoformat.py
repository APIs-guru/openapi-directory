from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import size

class VideoFormatFileTypeEnum(str, Enum):
    FLV = "FLV"
    THREEGPP = "THREEGPP"
    MP4 = "MP4"
    WEBM = "WEBM"
    M3_U8 = "M3U8"


@dataclass_json
@dataclass
class VideoFormat:
    file_type: Optional[VideoFormatFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    resolution: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    target_bit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetBitRate' }})
    
