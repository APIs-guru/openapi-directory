from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketizedCount:
    r"""BucketizedCount
    Represents count of jobs within one bucket.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    range: Optional[BucketRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
