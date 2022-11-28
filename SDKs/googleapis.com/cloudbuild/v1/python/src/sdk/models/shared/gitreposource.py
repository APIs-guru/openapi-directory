from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GitRepoSourceRepoTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CLOUD_SOURCE_REPOSITORIES = "CLOUD_SOURCE_REPOSITORIES"
    GITHUB = "GITHUB"
    BITBUCKET_SERVER = "BITBUCKET_SERVER"


@dataclass_json
@dataclass
class GitRepoSource:
    r"""GitRepoSource
    GitRepoSource describes a repo and ref of a code repository.
    """
    
    bitbucket_server_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfig') }})
    github_enterprise_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('githubEnterpriseConfig') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo_type: Optional[GitRepoSourceRepoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoType') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
