from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Histogram:
    r"""Histogram
    Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use \"1,2,5 bucketing\": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.
    """
    
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCounts') }})
    first_bucket_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBucketOffset') }})
    
