from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicemeshanalysismessage
from . import servicemeshcontrolplanemanagement
from . import servicemeshdataplanemanagement


@dataclass_json
@dataclass
class ServiceMeshMembershipState:
    analysis_messages: Optional[List[servicemeshanalysismessage.ServiceMeshAnalysisMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisMessages' }})
    config_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configApiVersion' }})
    control_plane_management: Optional[servicemeshcontrolplanemanagement.ServiceMeshControlPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlPlaneManagement' }})
    data_plane_management: Optional[servicemeshdataplanemanagement.ServiceMeshDataPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPlaneManagement' }})
    
