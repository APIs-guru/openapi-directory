from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configmanagementinstallerror

class ConfigManagementOperatorStateDeploymentStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementOperatorState:
    deployment_state: Optional[ConfigManagementOperatorStateDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentState' }})
    errors: Optional[List[configmanagementinstallerror.ConfigManagementInstallError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
