from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServiceMeshDataPlaneManagementStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    PROVISIONING = "PROVISIONING"
    ACTIVE = "ACTIVE"
    STALLED = "STALLED"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class ServiceMeshDataPlaneManagement:
    r"""ServiceMeshDataPlaneManagement
    Status of data plane management. Only reported per-member.
    """
    
    details: Optional[List[ServiceMeshStatusDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    state: Optional[ServiceMeshDataPlaneManagementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
