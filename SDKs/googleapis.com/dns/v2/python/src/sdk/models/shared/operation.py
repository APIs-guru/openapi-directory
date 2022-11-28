from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OperationStatusEnum(str, Enum):
    PENDING = "PENDING"
    DONE = "DONE"


@dataclass_json
@dataclass
class Operation:
    r"""Operation
    An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
    """
    
    dns_key_context: Optional[OperationDNSKeyContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsKeyContext') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    zone_context: Optional[OperationManagedZoneContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoneContext') }})
    
