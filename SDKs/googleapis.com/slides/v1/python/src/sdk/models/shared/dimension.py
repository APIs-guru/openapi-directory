from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DimensionUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    EMU = "EMU"
    PT = "PT"


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    A magnitude in a single direction in the specified units.
    """
    
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magnitude') }})
    unit: Optional[DimensionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
