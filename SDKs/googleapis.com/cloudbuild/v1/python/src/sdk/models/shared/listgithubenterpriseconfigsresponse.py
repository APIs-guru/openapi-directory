from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import githubenterpriseconfig


@dataclass_json
@dataclass
class ListGithubEnterpriseConfigsResponse:
    configs: Optional[List[githubenterpriseconfig.GitHubEnterpriseConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
