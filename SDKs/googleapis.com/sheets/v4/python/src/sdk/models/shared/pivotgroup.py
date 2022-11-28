from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PivotGroupSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class PivotGroup:
    r"""PivotGroup
    A single grouping (either row or column) in a pivot table.
    """
    
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    group_limit: Optional[PivotGroupLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLimit') }})
    group_rule: Optional[PivotGroupRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupRule') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    repeat_headings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatHeadings') }})
    show_totals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showTotals') }})
    sort_order: Optional[PivotGroupSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    source_column_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceColumnOffset') }})
    value_bucket: Optional[PivotGroupSortValueBucket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBucket') }})
    value_metadata: Optional[List[PivotGroupValueMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMetadata') }})
    
