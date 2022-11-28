from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AxisScaleEnum(str, Enum):
    SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED"
    LINEAR = "LINEAR"
    LOG10 = "LOG10"


@dataclass_json
@dataclass
class Axis:
    r"""Axis
    A chart axis.
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    scale: Optional[AxisScaleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    
