from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGitLabConfigsResponse:
    r"""ListGitLabConfigsResponse
    RPC response object returned by ListGitLabConfigs RPC method.
    """
    
    gitlab_configs: Optional[List[GitLabConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
