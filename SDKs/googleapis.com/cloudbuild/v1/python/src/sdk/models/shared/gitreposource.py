from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GitRepoSourceRepoTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CLOUD_SOURCE_REPOSITORIES = "CLOUD_SOURCE_REPOSITORIES"
    GITHUB = "GITHUB"
    BITBUCKET_SERVER = "BITBUCKET_SERVER"


@dataclass_json
@dataclass
class GitRepoSource:
    bitbucket_server_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucketServerConfig' }})
    github_enterprise_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'githubEnterpriseConfig' }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo_type: Optional[GitRepoSourceRepoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoType' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
