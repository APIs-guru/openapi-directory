from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementMembershipState:
    r"""ConfigManagementMembershipState
    **Anthos Config Management**: State for a single cluster.
    """
    
    binauthz_state: Optional[ConfigManagementBinauthzState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binauthzState') }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config_sync_state: Optional[ConfigManagementConfigSyncState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSyncState') }})
    hierarchy_controller_state: Optional[ConfigManagementHierarchyControllerState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyControllerState') }})
    membership_spec: Optional[ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpec') }})
    operator_state: Optional[ConfigManagementOperatorState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorState') }})
    policy_controller_state: Optional[ConfigManagementPolicyControllerState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyControllerState') }})
    
