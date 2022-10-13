from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementgatekeeperdeploymentstate
from . import configmanagementpolicycontrollerversion


@dataclass_json
@dataclass
class ConfigManagementPolicyControllerState:
    deployment_state: Optional[configmanagementgatekeeperdeploymentstate.ConfigManagementGatekeeperDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentState' }})
    version: Optional[configmanagementpolicycontrollerversion.ConfigManagementPolicyControllerVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
