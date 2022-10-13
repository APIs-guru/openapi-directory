from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicatingStep:
    last_thirty_minutes_average_bytes_per_second: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastThirtyMinutesAverageBytesPerSecond' }})
    last_two_minutes_average_bytes_per_second: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTwoMinutesAverageBytesPerSecond' }})
    replicated_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicatedBytes' }})
    total_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytes' }})
    
