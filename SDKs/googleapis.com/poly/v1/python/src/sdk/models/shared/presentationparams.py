from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quaternion

class PresentationParamsColorSpaceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LINEAR = "LINEAR"
    GAMMA = "GAMMA"


@dataclass_json
@dataclass
class PresentationParams:
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    color_space: Optional[PresentationParamsColorSpaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorSpace' }})
    orienting_rotation: Optional[quaternion.Quaternion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientingRotation' }})
    
