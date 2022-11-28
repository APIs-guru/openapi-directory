from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBreakpointResponse:
    r"""GetBreakpointResponse
    Response for getting breakpoint information.
    """
    
    breakpoint: Optional[Breakpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakpoint') }})
    
