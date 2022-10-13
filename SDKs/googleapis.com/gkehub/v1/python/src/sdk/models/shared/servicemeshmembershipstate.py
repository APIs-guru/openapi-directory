from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicemeshcontrolplanemanagement
from . import servicemeshdataplanemanagement


@dataclass_json
@dataclass
class ServiceMeshMembershipState:
    control_plane_management: Optional[servicemeshcontrolplanemanagement.ServiceMeshControlPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlPlaneManagement' }})
    data_plane_management: Optional[servicemeshdataplanemanagement.ServiceMeshDataPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPlaneManagement' }})
    
