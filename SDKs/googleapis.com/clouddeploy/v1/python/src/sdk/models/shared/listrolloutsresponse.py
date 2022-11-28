from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRolloutsResponse:
    r"""ListRolloutsResponse
    ListRolloutsResponse is the response object reutrned by `ListRollouts`.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rollouts: Optional[List[Rollout]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollouts') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
