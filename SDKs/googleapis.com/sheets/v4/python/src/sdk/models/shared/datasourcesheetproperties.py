from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumn
from . import dataexecutionstatus


@dataclass_json
@dataclass
class DataSourceSheetProperties:
    columns: Optional[List[datasourcecolumn.DataSourceColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    data_execution_status: Optional[dataexecutionstatus.DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExecutionStatus' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    
