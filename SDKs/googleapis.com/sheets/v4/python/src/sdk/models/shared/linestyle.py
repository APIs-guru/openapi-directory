from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    type: Optional[LineStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
