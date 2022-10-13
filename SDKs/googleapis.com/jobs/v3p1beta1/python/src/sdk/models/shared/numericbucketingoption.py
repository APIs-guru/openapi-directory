from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumericBucketingOption:
    bucket_bounds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketBounds' }})
    requires_min_max: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresMinMax' }})
    
