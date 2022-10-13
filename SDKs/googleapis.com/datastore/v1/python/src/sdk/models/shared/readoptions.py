from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReadOptionsReadConsistencyEnum(str, Enum):
    READ_CONSISTENCY_UNSPECIFIED = "READ_CONSISTENCY_UNSPECIFIED"
    STRONG = "STRONG"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class ReadOptions:
    read_consistency: Optional[ReadOptionsReadConsistencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readConsistency' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
