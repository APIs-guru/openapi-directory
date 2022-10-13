from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AxisScaleEnum(str, Enum):
    SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED"
    LINEAR = "LINEAR"
    LOG10 = "LOG10"


@dataclass_json
@dataclass
class Axis:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    scale: Optional[AxisScaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    
