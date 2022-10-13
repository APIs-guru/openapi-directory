from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repoid


@dataclass_json
@dataclass
class CloudWorkspaceID:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    repo_id: Optional[repoid.RepoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoId' }})
    
