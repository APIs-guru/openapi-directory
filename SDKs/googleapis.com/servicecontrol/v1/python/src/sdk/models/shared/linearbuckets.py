from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinearBuckets:
    r"""LinearBuckets
    Describing buckets with constant width.
    """
    
    num_finite_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFiniteBuckets') }})
    offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
