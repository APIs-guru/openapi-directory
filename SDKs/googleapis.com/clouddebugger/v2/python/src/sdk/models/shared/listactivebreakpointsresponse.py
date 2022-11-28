from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListActiveBreakpointsResponse:
    r"""ListActiveBreakpointsResponse
    Response for listing active breakpoints.
    """
    
    breakpoints: Optional[List[Breakpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakpoints') }})
    next_wait_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextWaitToken') }})
    wait_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitExpired') }})
    
