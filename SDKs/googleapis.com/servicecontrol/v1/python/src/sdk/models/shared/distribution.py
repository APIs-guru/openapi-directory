from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exemplar
from . import explicitbuckets
from . import exponentialbuckets
from . import linearbuckets


@dataclass_json
@dataclass
class Distribution:
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCounts' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    exemplars: Optional[List[exemplar.Exemplar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemplars' }})
    explicit_buckets: Optional[explicitbuckets.ExplicitBuckets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitBuckets' }})
    exponential_buckets: Optional[exponentialbuckets.ExponentialBuckets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialBuckets' }})
    linear_buckets: Optional[linearbuckets.LinearBuckets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linearBuckets' }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    sum_of_squared_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sumOfSquaredDeviation' }})
    
