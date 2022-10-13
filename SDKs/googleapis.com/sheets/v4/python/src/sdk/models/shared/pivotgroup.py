from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import pivotgrouplimit
from . import pivotgrouprule
from . import pivotgroupsortvaluebucket
from . import pivotgroupvaluemetadata

class PivotGroupSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class PivotGroup:
    data_source_column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceColumnReference' }})
    group_limit: Optional[pivotgrouplimit.PivotGroupLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupLimit' }})
    group_rule: Optional[pivotgrouprule.PivotGroupRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupRule' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    repeat_headings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatHeadings' }})
    show_totals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showTotals' }})
    sort_order: Optional[PivotGroupSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    source_column_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceColumnOffset' }})
    value_bucket: Optional[pivotgroupsortvaluebucket.PivotGroupSortValueBucket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueBucket' }})
    value_metadata: Optional[List[pivotgroupvaluemetadata.PivotGroupValueMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueMetadata' }})
    
