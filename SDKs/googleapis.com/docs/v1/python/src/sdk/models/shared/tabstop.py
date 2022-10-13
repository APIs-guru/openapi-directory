from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimension

class TabStopAlignmentEnum(str, Enum):
    TAB_STOP_ALIGNMENT_UNSPECIFIED = "TAB_STOP_ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"


@dataclass_json
@dataclass
class TabStop:
    alignment: Optional[TabStopAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    offset: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    
