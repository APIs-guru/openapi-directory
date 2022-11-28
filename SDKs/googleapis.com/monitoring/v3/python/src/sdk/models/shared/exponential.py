from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Exponential:
    r"""Exponential
    Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
    """
    
    growth_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('growthFactor') }})
    num_finite_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFiniteBuckets') }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    
