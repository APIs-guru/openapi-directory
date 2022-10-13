from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleFirestoreAdminV1TTLConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    NEEDS_REPAIR = "NEEDS_REPAIR"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1TTLConfig:
    state: Optional[GoogleFirestoreAdminV1TTLConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
