from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementPolicyControllerState:
    r"""ConfigManagementPolicyControllerState
    State for PolicyControllerState.
    """
    
    deployment_state: Optional[ConfigManagementGatekeeperDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    version: Optional[ConfigManagementPolicyControllerVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
