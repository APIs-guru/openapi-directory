from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestamp


@dataclass_json
@dataclass
class PerfSample:
    sample_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleTime' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
