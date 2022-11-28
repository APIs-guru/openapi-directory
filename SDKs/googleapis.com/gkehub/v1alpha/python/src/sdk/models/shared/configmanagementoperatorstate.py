from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigManagementOperatorStateDeploymentStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementOperatorState:
    r"""ConfigManagementOperatorState
    State information for an ACM's Operator
    """
    
    deployment_state: Optional[ConfigManagementOperatorStateDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    errors: Optional[List[ConfigManagementInstallError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
