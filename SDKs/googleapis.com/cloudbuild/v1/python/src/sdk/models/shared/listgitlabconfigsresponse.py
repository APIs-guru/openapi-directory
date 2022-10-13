from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gitlabconfig


@dataclass_json
@dataclass
class ListGitLabConfigsResponse:
    gitlab_configs: Optional[List[gitlabconfig.GitLabConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
