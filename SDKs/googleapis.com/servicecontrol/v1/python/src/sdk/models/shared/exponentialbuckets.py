from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExponentialBuckets:
    r"""ExponentialBuckets
    Describing buckets with exponentially growing width.
    """
    
    growth_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('growthFactor') }})
    num_finite_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFiniteBuckets') }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    
