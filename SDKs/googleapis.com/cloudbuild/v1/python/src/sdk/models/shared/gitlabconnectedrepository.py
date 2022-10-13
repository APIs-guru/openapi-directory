from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitlabrepositoryid
from . import status


@dataclass_json
@dataclass
class GitLabConnectedRepository:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    repo: Optional[gitlabrepositoryid.GitLabRepositoryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
