from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReadOnly:
    r"""ReadOnly
    Message type to initiate a read-only transaction.
    """
    
    exact_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactStaleness') }})
    max_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxStaleness') }})
    min_read_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minReadTimestamp') }})
    read_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTimestamp') }})
    return_read_timestamp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnReadTimestamp') }})
    strong: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strong') }})
    
