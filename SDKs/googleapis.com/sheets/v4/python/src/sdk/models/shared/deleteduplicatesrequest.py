from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDuplicatesRequest:
    r"""DeleteDuplicatesRequest
    Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.
    """
    
    comparison_columns: Optional[List[DimensionRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonColumns') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
