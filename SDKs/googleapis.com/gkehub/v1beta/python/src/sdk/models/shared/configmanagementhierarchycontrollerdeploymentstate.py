from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    extension: Optional[ConfigManagementHierarchyControllerDeploymentStateExtensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    hnc: Optional[ConfigManagementHierarchyControllerDeploymentStateHncEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hnc' }})
    
