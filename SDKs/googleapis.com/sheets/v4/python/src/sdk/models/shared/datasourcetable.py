from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import dataexecutionstatus
from . import filterspec
from . import sortspec

class DataSourceTableColumnSelectionTypeEnum(str, Enum):
    DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
    SELECTED = "SELECTED"
    SYNC_ALL = "SYNC_ALL"


@dataclass_json
@dataclass
class DataSourceTable:
    column_selection_type: Optional[DataSourceTableColumnSelectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSelectionType' }})
    columns: Optional[List[datasourcecolumnreference.DataSourceColumnReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    data_execution_status: Optional[dataexecutionstatus.DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExecutionStatus' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    filter_specs: Optional[List[filterspec.FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterSpecs' }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowLimit' }})
    sort_specs: Optional[List[sortspec.SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortSpecs' }})
    
