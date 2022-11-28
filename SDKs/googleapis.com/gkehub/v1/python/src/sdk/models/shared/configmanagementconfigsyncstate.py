from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementConfigSyncState:
    r"""ConfigManagementConfigSyncState
    State information for ConfigSync
    """
    
    deployment_state: Optional[ConfigManagementConfigSyncDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    sync_state: Optional[ConfigManagementSyncState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncState') }})
    version: Optional[ConfigManagementConfigSyncVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
