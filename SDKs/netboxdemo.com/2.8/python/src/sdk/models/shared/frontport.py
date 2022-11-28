from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FrontPortTypeLabelEnum(str, Enum):
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

class FrontPortTypeValueEnum(str, Enum):
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
class FrontPortType:
    label: FrontPortTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: FrontPortTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class FrontPort:
    device: NestedDevice = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rear_port: FrontPortRearPort = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rear_port') }})
    type: FrontPortType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    cable: Optional[NestedCable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    rear_port_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rear_port_position') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
