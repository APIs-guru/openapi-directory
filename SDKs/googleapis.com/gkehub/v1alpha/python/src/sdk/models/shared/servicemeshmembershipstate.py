from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceMeshMembershipState:
    r"""ServiceMeshMembershipState
    **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
    """
    
    analysis_messages: Optional[List[ServiceMeshAnalysisMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisMessages') }})
    config_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configApiVersion') }})
    control_plane_management: Optional[ServiceMeshControlPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlPlaneManagement') }})
    data_plane_management: Optional[ServiceMeshDataPlaneManagement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneManagement') }})
    
