from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReadWriteReadLockModeEnum(str, Enum):
    READ_LOCK_MODE_UNSPECIFIED = "READ_LOCK_MODE_UNSPECIFIED"
    PESSIMISTIC = "PESSIMISTIC"
    OPTIMISTIC = "OPTIMISTIC"


@dataclass_json
@dataclass
class ReadWrite:
    r"""ReadWrite
    Message type to initiate a read-write transaction. Currently this transaction type has no options.
    """
    
    read_lock_mode: Optional[ReadWriteReadLockModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readLockMode') }})
    
