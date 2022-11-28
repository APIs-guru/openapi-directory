from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotFilterCriteria:
    r"""PivotFilterCriteria
    Criteria for showing/hiding rows in a pivot table.
    """
    
    condition: Optional[BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    visible_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleByDefault') }})
    visible_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleValues') }})
    
