from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterView:
    r"""FilterView
    A filter view.
    """
    
    criteria: Optional[dict[str, FilterCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    filter_specs: Optional[List[FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    filter_view_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterViewId') }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sort_specs: Optional[List[SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
