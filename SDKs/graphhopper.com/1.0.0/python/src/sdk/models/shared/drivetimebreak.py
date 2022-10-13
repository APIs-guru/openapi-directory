from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DriveTimeBreak:
    duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    initial_driving_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_driving_time' }})
    max_driving_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_driving_time' }})
    possible_split: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'possible_split' }})
    
