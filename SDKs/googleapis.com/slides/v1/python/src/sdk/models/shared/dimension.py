from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DimensionUnitEnum(str, Enum):
    UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED"
    EMU = "EMU"
    PT = "PT"


@dataclass_json
@dataclass
class Dimension:
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'magnitude' }})
    unit: Optional[DimensionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
