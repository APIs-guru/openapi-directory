from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dataexecutionstatus
from . import datasource


@dataclass_json
@dataclass
class UpdateDataSourceResponse:
    data_execution_status: Optional[dataexecutionstatus.DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExecutionStatus' }})
    data_source: Optional[datasource.DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    
