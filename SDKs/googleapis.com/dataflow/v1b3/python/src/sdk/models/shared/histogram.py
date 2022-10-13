from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Histogram:
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCounts' }})
    first_bucket_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstBucketOffset' }})
    
