from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Exponential:
    growth_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'growthFactor' }})
    num_finite_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numFiniteBuckets' }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    
