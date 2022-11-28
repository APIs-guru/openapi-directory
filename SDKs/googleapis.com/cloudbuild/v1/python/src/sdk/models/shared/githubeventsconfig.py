from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitHubEventsConfig:
    r"""GitHubEventsConfig
    GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
    """
    
    enterprise_config_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseConfigResourceName') }})
    installation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    
