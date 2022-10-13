from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color

class GoogleAppsCardV1BorderStyleTypeEnum(str, Enum):
    BORDER_TYPE_UNSPECIFIED = "BORDER_TYPE_UNSPECIFIED"
    NO_BORDER = "NO_BORDER"
    STROKE = "STROKE"


@dataclass_json
@dataclass
class GoogleAppsCardV1BorderStyle:
    corner_radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cornerRadius' }})
    stroke_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strokeColor' }})
    type: Optional[GoogleAppsCardV1BorderStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
