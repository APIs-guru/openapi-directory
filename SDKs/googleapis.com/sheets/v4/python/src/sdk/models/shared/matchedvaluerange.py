from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchedValueRange:
    r"""MatchedValueRange
    A value range that was matched by one or more data filers.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    value_range: Optional[ValueRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRange') }})
    
