from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReadWriteReadLockModeEnum(str, Enum):
    READ_LOCK_MODE_UNSPECIFIED = "READ_LOCK_MODE_UNSPECIFIED"
    PESSIMISTIC = "PESSIMISTIC"
    OPTIMISTIC = "OPTIMISTIC"


@dataclass_json
@dataclass
class ReadWrite:
    read_lock_mode: Optional[ReadWriteReadLockModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readLockMode' }})
    
