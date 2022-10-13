from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import position


@dataclass_json
@dataclass
class ApproximateProgress:
    percent_complete: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentComplete' }})
    position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    remaining_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingTime' }})
    
