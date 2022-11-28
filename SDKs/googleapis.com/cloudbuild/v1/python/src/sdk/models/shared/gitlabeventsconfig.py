from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitLabEventsConfig:
    r"""GitLabEventsConfig
    GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
    """
    
    gitlab_config: Optional[GitLabConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConfig') }})
    gitlab_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConfigResource') }})
    project_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNamespace') }})
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclass
class GitLabEventsConfigInput:
    r"""GitLabEventsConfigInput
    GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
    """
    
    gitlab_config: Optional[GitLabConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConfig') }})
    gitlab_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConfigResource') }})
    project_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNamespace') }})
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    
