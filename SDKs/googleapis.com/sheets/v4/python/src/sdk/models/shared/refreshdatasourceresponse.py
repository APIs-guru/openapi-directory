from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import refreshdatasourceobjectexecutionstatus


@dataclass_json
@dataclass
class RefreshDataSourceResponse:
    statuses: Optional[List[refreshdatasourceobjectexecutionstatus.RefreshDataSourceObjectExecutionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    
