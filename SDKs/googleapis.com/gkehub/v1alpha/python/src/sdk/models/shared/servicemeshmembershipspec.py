from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ServiceMeshMembershipSpecControlPlaneEnum(str, Enum):
    CONTROL_PLANE_MANAGEMENT_UNSPECIFIED = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

class ServiceMeshMembershipSpecDefaultChannelEnum(str, Enum):
    CHANNEL_UNSPECIFIED = "CHANNEL_UNSPECIFIED"
    RAPID = "RAPID"
    REGULAR = "REGULAR"
    STABLE = "STABLE"

class ServiceMeshMembershipSpecManagementEnum(str, Enum):
    MANAGEMENT_UNSPECIFIED = "MANAGEMENT_UNSPECIFIED"
    MANAGEMENT_AUTOMATIC = "MANAGEMENT_AUTOMATIC"
    MANAGEMENT_MANUAL = "MANAGEMENT_MANUAL"


@dataclass_json
@dataclass
class ServiceMeshMembershipSpec:
    control_plane: Optional[ServiceMeshMembershipSpecControlPlaneEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlPlane' }})
    default_channel: Optional[ServiceMeshMembershipSpecDefaultChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultChannel' }})
    management: Optional[ServiceMeshMembershipSpecManagementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'management' }})
    
