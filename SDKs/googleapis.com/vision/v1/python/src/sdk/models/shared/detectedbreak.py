from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    is_prefix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrefix' }})
    type: Optional[DetectedBreakTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
