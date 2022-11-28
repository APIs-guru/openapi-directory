from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TabStopAlignmentEnum(str, Enum):
    TAB_STOP_ALIGNMENT_UNSPECIFIED = "TAB_STOP_ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"


@dataclass_json
@dataclass
class TabStop:
    r"""TabStop
    A tab stop within a paragraph.
    """
    
    alignment: Optional[TabStopAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    offset: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
