from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operation


@dataclass_json
@dataclass
class ReportRequest:
    operations: Optional[List[operation.Operation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    
