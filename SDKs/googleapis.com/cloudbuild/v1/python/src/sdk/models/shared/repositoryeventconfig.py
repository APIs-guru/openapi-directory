from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RepositoryEventConfigRepositoryTypeEnum(str, Enum):
    REPOSITORY_TYPE_UNSPECIFIED = "REPOSITORY_TYPE_UNSPECIFIED"
    GITHUB = "GITHUB"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    GITLAB_ENTERPRISE = "GITLAB_ENTERPRISE"


@dataclass_json
@dataclass
class RepositoryEventConfigInput:
    r"""RepositoryEventConfigInput
    The configuration of a trigger that creates a build whenever an event from Repo API is received.
    """
    
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    

@dataclass_json
@dataclass
class RepositoryEventConfig:
    r"""RepositoryEventConfig
    The configuration of a trigger that creates a build whenever an event from Repo API is received.
    """
    
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    repository_type: Optional[RepositoryEventConfigRepositoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryType') }})
    
