from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DriveTimeBreak:
    duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    max_driving_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_driving_time') }})
    initial_driving_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_driving_time') }})
    possible_split: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('possible_split') }})
    
