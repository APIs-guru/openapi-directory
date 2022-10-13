from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pullrequestfilter
from . import pushfilter


@dataclass_json
@dataclass
class GitHubEventsConfig:
    enterprise_config_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseConfigResourceName' }})
    installation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    pull_request: Optional[pullrequestfilter.PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequest' }})
    push: Optional[pushfilter.PushFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    
