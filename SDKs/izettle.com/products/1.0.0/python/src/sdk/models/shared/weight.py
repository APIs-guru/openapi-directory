from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class WeightUnitEnum(str, Enum):
    KG = "kg"
    G = "g"
    OZ = "oz"
    LB = "lb"


@dataclass_json
@dataclass
class Weight:
    unit: WeightUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    weight: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
