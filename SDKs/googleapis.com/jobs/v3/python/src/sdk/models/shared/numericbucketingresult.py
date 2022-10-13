from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucketizedcount


@dataclass_json
@dataclass
class NumericBucketingResult:
    counts: Optional[List[bucketizedcount.BucketizedCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    
