from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import explicit
from . import exponential
from . import linear


@dataclass_json
@dataclass
class BucketOptions:
    explicit_buckets: Optional[explicit.Explicit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitBuckets' }})
    exponential_buckets: Optional[exponential.Exponential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialBuckets' }})
    linear_buckets: Optional[linear.Linear] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linearBuckets' }})
    
