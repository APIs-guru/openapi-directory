from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TailLogEntriesResponse:
    r"""TailLogEntriesResponse
    Result returned from TailLogEntries.
    """
    
    entries: Optional[List[LogEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    suppression_info: Optional[List[SuppressionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressionInfo') }})
    
