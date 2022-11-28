from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotFilterSpec:
    r"""PivotFilterSpec
    The pivot table filter criteria associated with a specific source column offset.
    """
    
    column_offset_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnOffsetIndex') }})
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    filter_criteria: Optional[PivotFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    
