from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AffineTransformUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    EMU = "EMU"
    PT = "PT"


@dataclass_json
@dataclass
class AffineTransform:
    r"""AffineTransform
    AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
    """
    
    scale_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleX') }})
    scale_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleY') }})
    shear_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shearX') }})
    shear_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shearY') }})
    translate_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translateX') }})
    translate_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translateY') }})
    unit: Optional[AffineTransformUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
