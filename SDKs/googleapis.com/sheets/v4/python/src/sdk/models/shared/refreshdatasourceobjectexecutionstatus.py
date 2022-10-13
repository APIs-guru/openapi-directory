from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dataexecutionstatus
from . import datasourceobjectreference


@dataclass_json
@dataclass
class RefreshDataSourceObjectExecutionStatus:
    data_execution_status: Optional[dataexecutionstatus.DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExecutionStatus' }})
    reference: Optional[datasourceobjectreference.DataSourceObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    
