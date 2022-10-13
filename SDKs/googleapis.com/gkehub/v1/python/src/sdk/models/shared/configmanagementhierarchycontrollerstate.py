from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementhierarchycontrollerdeploymentstate
from . import configmanagementhierarchycontrollerversion


@dataclass_json
@dataclass
class ConfigManagementHierarchyControllerState:
    state: Optional[configmanagementhierarchycontrollerdeploymentstate.ConfigManagementHierarchyControllerDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    version: Optional[configmanagementhierarchycontrollerversion.ConfigManagementHierarchyControllerVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
