from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementconfigsyncdeploymentstate
from . import configmanagementsyncstate
from . import configmanagementconfigsyncversion


@dataclass_json
@dataclass
class ConfigManagementConfigSyncState:
    deployment_state: Optional[configmanagementconfigsyncdeploymentstate.ConfigManagementConfigSyncDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentState' }})
    sync_state: Optional[configmanagementsyncstate.ConfigManagementSyncState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncState' }})
    version: Optional[configmanagementconfigsyncversion.ConfigManagementConfigSyncVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
