from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterSpec:
    r"""FilterSpec
    The filter criteria associated with a specific column.
    """
    
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    filter_criteria: Optional[FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    
