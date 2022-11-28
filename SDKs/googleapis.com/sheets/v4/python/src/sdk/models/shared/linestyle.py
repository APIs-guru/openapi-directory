from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LineStyleTypeEnum(str, Enum):
    LINE_DASH_TYPE_UNSPECIFIED = "LINE_DASH_TYPE_UNSPECIFIED"
    INVISIBLE = "INVISIBLE"
    CUSTOM = "CUSTOM"
    SOLID = "SOLID"
    DOTTED = "DOTTED"
    MEDIUM_DASHED = "MEDIUM_DASHED"
    MEDIUM_DASHED_DOTTED = "MEDIUM_DASHED_DOTTED"
    LONG_DASHED = "LONG_DASHED"
    LONG_DASHED_DOTTED = "LONG_DASHED_DOTTED"


@dataclass_json
@dataclass
class LineStyle:
    r"""LineStyle
    Properties that describe the style of a line.
    """
    
    type: Optional[LineStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
