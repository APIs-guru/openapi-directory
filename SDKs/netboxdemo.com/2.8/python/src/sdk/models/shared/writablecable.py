from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableCableLengthUnitEnum(str, Enum):
    M = "m"
    CM = "cm"
    FT = "ft"
    IN = "in"

class WritableCableStatusEnum(str, Enum):
    CONNECTED = "connected"
    PLANNED = "planned"
    DECOMMISSIONING = "decommissioning"

class WritableCableTypeEnum(str, Enum):
    CAT3 = "cat3"
    CAT5 = "cat5"
    CAT5E = "cat5e"
    CAT6 = "cat6"
    CAT6A = "cat6a"
    CAT7 = "cat7"
    DAC_ACTIVE = "dac-active"
    DAC_PASSIVE = "dac-passive"
    MRJ21_TRUNK = "mrj21-trunk"
    COAXIAL = "coaxial"
    MMF = "mmf"
    MMF_OM1 = "mmf-om1"
    MMF_OM2 = "mmf-om2"
    MMF_OM3 = "mmf-om3"
    MMF_OM4 = "mmf-om4"
    SMF = "smf"
    SMF_OS1 = "smf-os1"
    SMF_OS2 = "smf-os2"
    AOC = "aoc"
    POWER = "power"


@dataclass_json
@dataclass
class WritableCableInput:
    termination_a_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a_id') }})
    termination_a_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a_type') }})
    termination_b_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_b_id') }})
    termination_b_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_b_type') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    length_unit: Optional[WritableCableLengthUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_unit') }})
    status: Optional[WritableCableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[WritableCableTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
