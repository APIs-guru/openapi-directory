from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WritableRearPortTypeEnum(str, Enum):
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
class WritableRearPortInput:
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: WritableRearPortTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    cable: Optional[NestedCableInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    positions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positions') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
