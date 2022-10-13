from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import breakpoint


@dataclass_json
@dataclass
class ListBreakpointsResponse:
    breakpoints: Optional[List[breakpoint.Breakpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakpoints' }})
    next_wait_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextWaitToken' }})
    
