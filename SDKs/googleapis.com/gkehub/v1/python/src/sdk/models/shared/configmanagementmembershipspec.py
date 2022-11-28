from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementMembershipSpec:
    r"""ConfigManagementMembershipSpec
    **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
    """
    
    config_sync: Optional[ConfigManagementConfigSync] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSync') }})
    hierarchy_controller: Optional[ConfigManagementHierarchyControllerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyController') }})
    policy_controller: Optional[ConfigManagementPolicyController] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyController') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
