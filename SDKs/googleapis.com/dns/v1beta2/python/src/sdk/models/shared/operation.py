from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operationdnskeycontext
from . import operationmanagedzonecontext

class OperationStatusEnum(str, Enum):
    PENDING = "pending"
    DONE = "done"


@dataclass_json
@dataclass
class Operation:
    dns_key_context: Optional[operationdnskeycontext.OperationDNSKeyContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsKeyContext' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    zone_context: Optional[operationmanagedzonecontext.OperationManagedZoneContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoneContext' }})
    
