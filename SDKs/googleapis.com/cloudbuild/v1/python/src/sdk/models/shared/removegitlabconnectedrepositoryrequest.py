from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitlabrepositoryid


@dataclass_json
@dataclass
class RemoveGitLabConnectedRepositoryRequest:
    connected_repository: Optional[gitlabrepositoryid.GitLabRepositoryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectedRepository' }})
    
