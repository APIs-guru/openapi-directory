from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MediaPropertiesAlignmentEnum(str, Enum):
    ALIGNMENT_UNSPECIFIED = "ALIGNMENT_UNSPECIFIED"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    CENTER = "CENTER"


@dataclass_json
@dataclass
class MediaProperties:
    alignment: Optional[MediaPropertiesAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
