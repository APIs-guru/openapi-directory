from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quotaoperation


@dataclass_json
@dataclass
class AllocateQuotaRequest:
    allocate_operation: Optional[quotaoperation.QuotaOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocateOperation' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    
