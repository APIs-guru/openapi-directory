from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetWorkspaceStatusResponse:
    r"""GetWorkspaceStatusResponse
    The changes that have occurred in the workspace since the base container version.
    """
    
    merge_conflict: Optional[List[MergeConflict]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeConflict') }})
    workspace_change: Optional[List[Entity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceChange') }})
    
