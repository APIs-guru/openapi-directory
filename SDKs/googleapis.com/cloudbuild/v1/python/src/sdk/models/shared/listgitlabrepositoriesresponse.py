from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGitLabRepositoriesResponse:
    r"""ListGitLabRepositoriesResponse
    RPC response object returned by the ListGitLabRepositories RPC method.
    """
    
    gitlab_repositories: Optional[List[GitLabRepository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabRepositories') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
