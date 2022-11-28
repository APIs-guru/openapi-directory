from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GitFileSourceRepoTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CLOUD_SOURCE_REPOSITORIES = "CLOUD_SOURCE_REPOSITORIES"
    GITHUB = "GITHUB"
    BITBUCKET_SERVER = "BITBUCKET_SERVER"


@dataclass_json
@dataclass
class GitFileSource:
    r"""GitFileSource
    GitFileSource describes a file within a (possibly remote) code repository.
    """
    
    bitbucket_server_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfig') }})
    github_enterprise_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('githubEnterpriseConfig') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    repo_type: Optional[GitFileSourceRepoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoType') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
