from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogEntrySourceLocation:
    r"""LogEntrySourceLocation
    Additional information about the source code location that produced the log entry.
    """
    
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    
