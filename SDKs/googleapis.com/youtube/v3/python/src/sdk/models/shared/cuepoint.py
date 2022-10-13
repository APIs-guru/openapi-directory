from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CuepointCueTypeEnum(str, Enum):
    CUE_TYPE_UNSPECIFIED = "cueTypeUnspecified"
    CUE_TYPE_AD = "cueTypeAd"


@dataclass_json
@dataclass
class Cuepoint:
    cue_type: Optional[CuepointCueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cueType' }})
    duration_secs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSecs' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insertion_offset_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionOffsetTimeMs' }})
    walltime_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walltimeMs' }})
    
