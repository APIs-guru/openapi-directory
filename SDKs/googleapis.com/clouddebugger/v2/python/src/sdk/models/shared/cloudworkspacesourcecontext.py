from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWorkspaceSourceContext:
    r"""CloudWorkspaceSourceContext
    A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
    """
    
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotId') }})
    workspace_id: Optional[CloudWorkspaceID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
