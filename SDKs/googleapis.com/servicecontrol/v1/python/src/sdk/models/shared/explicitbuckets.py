from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExplicitBuckets:
    r"""ExplicitBuckets
    Describing buckets with arbitrary user-provided width.
    """
    
    bounds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bounds') }})
    
