from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotGroupSortValueBucket:
    r"""PivotGroupSortValueBucket
    Information about which values in a pivot group should be used for sorting.
    """
    
    buckets: Optional[List[ExtendedValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    values_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuesIndex') }})
    
