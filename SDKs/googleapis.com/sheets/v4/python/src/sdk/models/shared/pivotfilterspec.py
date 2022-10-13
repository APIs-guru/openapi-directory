from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import pivotfiltercriteria


@dataclass_json
@dataclass
class PivotFilterSpec:
    column_offset_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnOffsetIndex' }})
    data_source_column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceColumnReference' }})
    filter_criteria: Optional[pivotfiltercriteria.PivotFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    
