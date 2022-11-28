from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReposResponse:
    r"""ListReposResponse
    Response for ListRepos. The size is not set in the returned repositories.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    repos: Optional[List[Repo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos') }})
    
