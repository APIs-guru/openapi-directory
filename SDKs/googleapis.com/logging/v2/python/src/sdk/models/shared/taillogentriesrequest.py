from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TailLogEntriesRequest:
    r"""TailLogEntriesRequest
    The parameters to TailLogEntries.
    """
    
    buffer_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bufferWindow') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNames') }})
    
