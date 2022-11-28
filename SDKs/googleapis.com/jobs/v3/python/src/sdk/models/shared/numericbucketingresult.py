from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NumericBucketingResult:
    r"""NumericBucketingResult
    Output only. Custom numeric bucketing result.
    """
    
    counts: Optional[List[BucketizedCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    
