from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bitbucketserverconfig
from . import pullrequestfilter
from . import pushfilter


@dataclass_json
@dataclass
class BitbucketServerTriggerConfig:
    bitbucket_server_config: Optional[bitbucketserverconfig.BitbucketServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucketServerConfig' }})
    bitbucket_server_config_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucketServerConfigResource' }})
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectKey' }})
    pull_request: Optional[pullrequestfilter.PullRequestFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequest' }})
    push: Optional[pushfilter.PushFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoSlug' }})
    
