from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import breakpoint


@dataclass_json
@dataclass
class UpdateActiveBreakpointRequest:
    breakpoint: Optional[breakpoint.Breakpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakpoint' }})
    
