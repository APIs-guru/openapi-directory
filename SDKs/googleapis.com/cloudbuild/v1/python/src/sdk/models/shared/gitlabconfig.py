from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gitlabrepositoryid
from . import gitlabenterpriseconfig
from . import gitlabsecrets


@dataclass_json
@dataclass
class GitLabConfig:
    connected_repositories: Optional[List[gitlabrepositoryid.GitLabRepositoryID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectedRepositories' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    enterprise_config: Optional[gitlabenterpriseconfig.GitLabEnterpriseConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secrets: Optional[gitlabsecrets.GitLabSecrets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookKey' }})
    
