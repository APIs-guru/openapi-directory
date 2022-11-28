from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CuepointCueTypeEnum(str, Enum):
    CUE_TYPE_UNSPECIFIED = "cueTypeUnspecified"
    CUE_TYPE_AD = "cueTypeAd"


@dataclass_json
@dataclass
class Cuepoint:
    r"""Cuepoint
    Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
    """
    
    cue_type: Optional[CuepointCueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cueType') }})
    duration_secs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSecs') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insertion_offset_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOffsetTimeMs') }})
    walltime_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walltimeMs') }})
    
