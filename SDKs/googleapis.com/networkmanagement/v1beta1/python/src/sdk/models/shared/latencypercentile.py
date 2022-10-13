from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LatencyPercentile:
    latency_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latencyMicros' }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent' }})
    
