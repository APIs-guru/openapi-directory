from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class ReportError:
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
