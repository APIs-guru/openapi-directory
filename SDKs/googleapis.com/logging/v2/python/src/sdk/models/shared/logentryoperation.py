from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogEntryOperation:
    r"""LogEntryOperation
    Additional information about a potentially long-running operation with which a log entry is associated.
    """
    
    first: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    producer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producer') }})
    
