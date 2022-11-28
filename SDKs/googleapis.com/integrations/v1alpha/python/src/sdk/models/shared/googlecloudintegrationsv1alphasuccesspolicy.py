from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum(str, Enum):
    FINAL_STATE_UNSPECIFIED = "FINAL_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuccessPolicy:
    r"""GoogleCloudIntegrationsV1alphaSuccessPolicy
    Policy that dictates the behavior for the task after it completes successfully.
    """
    
    final_state: Optional[GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalState') }})
    
