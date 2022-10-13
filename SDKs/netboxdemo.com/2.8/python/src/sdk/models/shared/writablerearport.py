from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedcable

class WritableRearPortTypeTypeEnum(str, Enum):
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
class WritableRearPort:
    cable: Optional[nestedcable.NestedCable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    positions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positions' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: WritableRearPortTypeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
