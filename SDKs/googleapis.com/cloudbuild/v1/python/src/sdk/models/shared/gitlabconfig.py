from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitLabConfigInput:
    r"""GitLabConfigInput
    GitLabConfig represents the configuration for a GitLab integration.
    """
    
    connected_repositories: Optional[List[GitLabRepositoryIDInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedRepositories') }})
    enterprise_config: Optional[GitLabEnterpriseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secrets: Optional[GitLabSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GitLabConfig:
    r"""GitLabConfig
    GitLabConfig represents the configuration for a GitLab integration.
    """
    
    connected_repositories: Optional[List[GitLabRepositoryID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedRepositories') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    enterprise_config: Optional[GitLabEnterpriseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secrets: Optional[GitLabSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    
