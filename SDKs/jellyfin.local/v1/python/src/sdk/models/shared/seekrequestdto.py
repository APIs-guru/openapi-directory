from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SeekRequestDto:
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PositionTicks' }})
    
