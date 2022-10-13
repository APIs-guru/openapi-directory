from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import projectrepoid


@dataclass_json
@dataclass
class RepoID:
    project_repo_id: Optional[projectrepoid.ProjectRepoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectRepoId' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
