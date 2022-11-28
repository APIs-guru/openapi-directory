from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class APIDimensionFilterGroupGroupTypeEnum(str, Enum):
    AND = "AND"


@dataclass_json
@dataclass
class APIDimensionFilterGroup:
    r"""APIDimensionFilterGroup
    A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
    """
    
    filters: Optional[List[APIDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_type: Optional[APIDimensionFilterGroupGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    
