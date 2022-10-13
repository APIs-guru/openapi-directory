from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImuDataGapFailureDetails:
    gap_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gapDuration' }})
    gap_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gapStartTime' }})
    
