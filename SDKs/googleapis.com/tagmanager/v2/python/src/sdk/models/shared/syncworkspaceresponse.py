from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncWorkspaceResponse:
    r"""SyncWorkspaceResponse
    A response after synchronizing the workspace to the latest container version.
    """
    
    merge_conflict: Optional[List[MergeConflict]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeConflict') }})
    sync_status: Optional[SyncStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncStatus') }})
    
