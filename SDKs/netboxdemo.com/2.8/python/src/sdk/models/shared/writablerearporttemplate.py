from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableRearPortTemplateTypeEnum(str, Enum):
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
class WritableRearPortTemplateInput:
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: WritableRearPortTemplateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    positions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positions') }})
    
