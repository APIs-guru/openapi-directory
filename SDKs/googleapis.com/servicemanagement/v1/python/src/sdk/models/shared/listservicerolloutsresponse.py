from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServiceRolloutsResponse:
    r"""ListServiceRolloutsResponse
    Response message for ListServiceRollouts method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rollouts: Optional[List[Rollout]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollouts') }})
    
