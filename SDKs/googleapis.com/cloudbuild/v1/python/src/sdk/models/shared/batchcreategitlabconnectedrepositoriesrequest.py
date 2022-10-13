from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creategitlabconnectedrepositoryrequest


@dataclass_json
@dataclass
class BatchCreateGitLabConnectedRepositoriesRequest:
    requests: Optional[List[creategitlabconnectedrepositoryrequest.CreateGitLabConnectedRepositoryRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
