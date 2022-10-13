from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3deploymentresult

class GoogleCloudDialogflowCxV3DeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Deployment:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    flow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[googleclouddialogflowcxv3deploymentresult.GoogleCloudDialogflowCxV3DeploymentResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudDialogflowCxV3DeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
