from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NumericBucketingOption:
    r"""NumericBucketingOption
    Input only. Use this field to specify bucketing option for the histogram search response.
    """
    
    bucket_bounds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketBounds') }})
    requires_min_max: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresMinMax') }})
    
