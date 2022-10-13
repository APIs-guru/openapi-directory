from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitlabconfig
from . import pullrequestfilter
from . import pushfilter


@dataclass_json
@dataclass
class GitLabEventsConfig:
    gitlab_config: Optional[gitlabconfig.GitLabConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabConfig' }})
    gitlab_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabConfigResource' }})
    project_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectNamespace' }})
    pull_request: Optional[pullrequestfilter.PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequest' }})
    push: Optional[pushfilter.PushFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    
