from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WeightUnitEnum(str, Enum):
    KG = "kg"
    G = "g"
    OZ = "oz"
    LB = "lb"


@dataclass_json
@dataclass
class Weight:
    unit: WeightUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    weight: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
