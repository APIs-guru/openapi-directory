from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ServiceMeshMembershipSpecControlPlaneEnum(str, Enum):
    CONTROL_PLANE_MANAGEMENT_UNSPECIFIED = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

class ServiceMeshMembershipSpecManagementEnum(str, Enum):
    MANAGEMENT_UNSPECIFIED = "MANAGEMENT_UNSPECIFIED"
    MANAGEMENT_AUTOMATIC = "MANAGEMENT_AUTOMATIC"
    MANAGEMENT_MANUAL = "MANAGEMENT_MANUAL"


@dataclass_json
@dataclass
class ServiceMeshMembershipSpec:
    r"""ServiceMeshMembershipSpec
    **Service Mesh**: Spec for a single Membership for the servicemesh feature
    """
    
    control_plane: Optional[ServiceMeshMembershipSpecControlPlaneEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlPlane') }})
    management: Optional[ServiceMeshMembershipSpecManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('management') }})
    
