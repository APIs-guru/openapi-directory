from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EditAtom:
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeOffset' }})
    inputs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeOffset' }})
    
