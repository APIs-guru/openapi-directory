from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigManagementHierarchyControllerDeploymentStateExtensionEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementHierarchyControllerDeploymentStateHncEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementHierarchyControllerDeploymentState:
    r"""ConfigManagementHierarchyControllerDeploymentState
    Deployment state for Hierarchy Controller
    """
    
    extension: Optional[ConfigManagementHierarchyControllerDeploymentStateExtensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    hnc: Optional[ConfigManagementHierarchyControllerDeploymentStateHncEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hnc') }})
    
