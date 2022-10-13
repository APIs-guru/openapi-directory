from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitlabconnectedrepository


@dataclass_json
@dataclass
class CreateGitLabConnectedRepositoryRequest:
    gitlab_connected_repository: Optional[gitlabconnectedrepository.GitLabConnectedRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabConnectedRepository' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
