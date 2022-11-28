from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementHierarchyControllerState:
    r"""ConfigManagementHierarchyControllerState
    State for Hierarchy Controller
    """
    
    state: Optional[ConfigManagementHierarchyControllerDeploymentState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version: Optional[ConfigManagementHierarchyControllerVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
