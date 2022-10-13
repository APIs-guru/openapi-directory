from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WorkloadIdentityPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class WorkloadIdentityPool:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[WorkloadIdentityPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
