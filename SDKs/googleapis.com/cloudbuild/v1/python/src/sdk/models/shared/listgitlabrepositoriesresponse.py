from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gitlabrepository


@dataclass_json
@dataclass
class ListGitLabRepositoriesResponse:
    gitlab_repositories: Optional[List[gitlabrepository.GitLabRepository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabRepositories' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
