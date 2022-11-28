from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceMeshFeatureState:
    r"""ServiceMeshFeatureState
    **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
    """
    
    analysis_messages: Optional[List[ServiceMeshAnalysisMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisMessages') }})
    
