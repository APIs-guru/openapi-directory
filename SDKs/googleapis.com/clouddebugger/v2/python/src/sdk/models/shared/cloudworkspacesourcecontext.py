from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudworkspaceid


@dataclass_json
@dataclass
class CloudWorkspaceSourceContext:
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotId' }})
    workspace_id: Optional[cloudworkspaceid.CloudWorkspaceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
