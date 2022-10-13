from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mergeconflict
from . import entity


@dataclass_json
@dataclass
class GetWorkspaceStatusResponse:
    merge_conflict: Optional[List[mergeconflict.MergeConflict]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeConflict' }})
    workspace_change: Optional[List[entity.Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceChange' }})
    
