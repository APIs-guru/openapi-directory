from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LatencyDistribution:
    r"""LatencyDistribution
    Describes measured latency distribution.
    """
    
    latency_percentiles: Optional[List[LatencyPercentile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyPercentiles') }})
    
