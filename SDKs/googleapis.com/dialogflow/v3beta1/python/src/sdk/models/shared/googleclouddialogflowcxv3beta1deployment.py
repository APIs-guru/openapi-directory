from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1deploymentresult

class GoogleCloudDialogflowCxV3beta1DeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Deployment:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    flow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[googleclouddialogflowcxv3beta1deploymentresult.GoogleCloudDialogflowCxV3beta1DeploymentResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudDialogflowCxV3beta1DeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
