from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementGatekeeperDeploymentState:
    r"""ConfigManagementGatekeeperDeploymentState
    State of Policy Controller installation.
    """
    
    gatekeeper_audit: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatekeeperAudit') }})
    gatekeeper_controller_manager_state: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatekeeperControllerManagerState') }})
    gatekeeper_mutation: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatekeeperMutation') }})
    
