from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RearPortTemplateTypeLabelEnum(str, Enum):
    EIGHT_P8_C = "8P8C"
    ONE_HUNDRED_AND_TEN_PUNCH = "110 Punch"
    BNC = "BNC"
    MRJ21 = "MRJ21"
    FC = "FC"
    LC = "LC"
    LC_APC = "LC/APC"
    LSH = "LSH"
    LSH_APC = "LSH/APC"
    MPO = "MPO"
    MTRJ = "MTRJ"
    SC = "SC"
    SC_APC = "SC/APC"
    ST = "ST"

class RearPortTemplateTypeValueEnum(str, Enum):
    EIGHTP8C = "8p8c"
    ONE_HUNDRED_AND_TEN_PUNCH = "110-punch"
    BNC = "bnc"
    MRJ21 = "mrj21"
    FC = "fc"
    LC = "lc"
    LC_APC = "lc-apc"
    LSH = "lsh"
    LSH_APC = "lsh-apc"
    MPO = "mpo"
    MTRJ = "mtrj"
    SC = "sc"
    SC_APC = "sc-apc"
    ST = "st"


@dataclass_json
@dataclass
class RearPortTemplateType:
    label: RearPortTemplateTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RearPortTemplateTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class RearPortTemplate:
    device_type: NestedDeviceType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: RearPortTemplateType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    positions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positions') }})
    
