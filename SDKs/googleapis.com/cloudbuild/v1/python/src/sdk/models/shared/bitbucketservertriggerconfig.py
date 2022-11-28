from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BitbucketServerTriggerConfigInput:
    r"""BitbucketServerTriggerConfigInput
    BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
    """
    
    bitbucket_server_config: Optional[BitbucketServerConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfig') }})
    bitbucket_server_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfigResource') }})
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectKey') }})
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoSlug') }})
    

@dataclass_json
@dataclass
class BitbucketServerTriggerConfig:
    r"""BitbucketServerTriggerConfig
    BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
    """
    
    bitbucket_server_config: Optional[BitbucketServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfig') }})
    bitbucket_server_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfigResource') }})
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectKey') }})
    pull_request: Optional[PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    push: Optional[PushFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoSlug') }})
    
