from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WritableFrontPortTemplateTypeTypeEnum(str, Enum):
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
class WritableFrontPortTemplate:
    device_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rear_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rear_port' }})
    rear_port_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rear_port_position' }})
    type: WritableFrontPortTemplateTypeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
