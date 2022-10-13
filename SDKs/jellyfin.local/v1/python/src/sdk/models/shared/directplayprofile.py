from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dlnaprofiletype_enum


@dataclass_json
@dataclass
class DirectPlayProfile:
    audio_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioCodec' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    type: Optional[dlnaprofiletype_enum.DlnaProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    video_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoCodec' }})
    
