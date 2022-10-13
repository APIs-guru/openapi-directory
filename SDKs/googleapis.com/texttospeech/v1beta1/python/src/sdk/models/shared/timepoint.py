from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Timepoint:
    mark_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markName' }})
    time_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeconds' }})
    
