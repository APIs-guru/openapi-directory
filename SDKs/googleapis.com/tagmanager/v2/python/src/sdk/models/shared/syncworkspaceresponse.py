from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mergeconflict
from . import syncstatus


@dataclass_json
@dataclass
class SyncWorkspaceResponse:
    merge_conflict: Optional[List[mergeconflict.MergeConflict]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeConflict' }})
    sync_status: Optional[syncstatus.SyncStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncStatus' }})
    
