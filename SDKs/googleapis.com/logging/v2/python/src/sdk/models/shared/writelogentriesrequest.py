from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteLogEntriesRequestInput:
    r"""WriteLogEntriesRequestInput
    The parameters to WriteLogEntries.
    """
    
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    entries: Optional[List[LogEntryInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    log_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logName') }})
    partial_success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialSuccess') }})
    resource: Optional[MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
