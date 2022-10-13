from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AffineTransformUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    EMU = "EMU"
    PT = "PT"


@dataclass_json
@dataclass
class AffineTransform:
    scale_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleX' }})
    scale_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleY' }})
    shear_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shearX' }})
    shear_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shearY' }})
    translate_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translateX' }})
    translate_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translateY' }})
    unit: Optional[AffineTransformUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
