from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RateLimits:
    max_burst_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBurstSize' }})
    max_concurrent_dispatches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentDispatches' }})
    max_dispatches_per_second: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDispatchesPerSecond' }})
    
