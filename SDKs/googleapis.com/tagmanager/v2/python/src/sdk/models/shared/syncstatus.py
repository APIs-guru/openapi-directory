from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SyncStatus:
    r"""SyncStatus
    The status of a workspace after synchronization.
    """
    
    merge_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeConflict') }})
    sync_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncError') }})
    
