from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servicemeshstatusdetails

class ServiceMeshControlPlaneManagementStateEnum(str, Enum):
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
class ServiceMeshControlPlaneManagement:
    details: Optional[List[servicemeshstatusdetails.ServiceMeshStatusDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    state: Optional[ServiceMeshControlPlaneManagementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
