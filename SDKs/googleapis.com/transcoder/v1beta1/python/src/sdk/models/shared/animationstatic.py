from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import normalizedcoordinate


@dataclass_json
@dataclass
class AnimationStatic:
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeOffset' }})
    xy: Optional[normalizedcoordinate.NormalizedCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xy' }})
    
