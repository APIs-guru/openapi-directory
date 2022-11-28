from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1DeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Deployment:
    r"""GoogleCloudDialogflowCxV3beta1Deployment
    Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    flow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[GoogleCloudDialogflowCxV3beta1DeploymentResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudDialogflowCxV3beta1DeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
