from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LatencyPercentile:
    r"""LatencyPercentile
    Latency percentile rank and value.
    """
    
    latency_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyMicros') }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    
