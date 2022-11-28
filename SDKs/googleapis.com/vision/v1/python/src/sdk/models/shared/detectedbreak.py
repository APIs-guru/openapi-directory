from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DetectedBreakTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SPACE = "SPACE"
    SURE_SPACE = "SURE_SPACE"
    EOL_SURE_SPACE = "EOL_SURE_SPACE"
    HYPHEN = "HYPHEN"
    LINE_BREAK = "LINE_BREAK"


@dataclass_json
@dataclass
class DetectedBreak:
    r"""DetectedBreak
    Detected start or end of a structural component.
    """
    
    is_prefix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrefix') }})
    type: Optional[DetectedBreakTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
