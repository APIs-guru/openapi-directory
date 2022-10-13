from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import filtercriteria


@dataclass_json
@dataclass
class FilterSpec:
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIndex' }})
    data_source_column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceColumnReference' }})
    filter_criteria: Optional[filtercriteria.FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    
