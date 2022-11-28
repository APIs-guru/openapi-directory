from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasicFilter:
    r"""BasicFilter
    The default filter associated with a sheet.
    """
    
    criteria: Optional[dict[str, FilterCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    filter_specs: Optional[List[FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sort_specs: Optional[List[SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    
