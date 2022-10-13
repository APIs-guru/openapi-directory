from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FsCommandPositionOptionEnum(str, Enum):
    CENTERED = "CENTERED"
    DISTANCE_FROM_TOP_LEFT_CORNER = "DISTANCE_FROM_TOP_LEFT_CORNER"


@dataclass_json
@dataclass
class FsCommand:
    left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    position_option: Optional[FsCommandPositionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionOption' }})
    top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    window_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowHeight' }})
    window_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowWidth' }})
    
