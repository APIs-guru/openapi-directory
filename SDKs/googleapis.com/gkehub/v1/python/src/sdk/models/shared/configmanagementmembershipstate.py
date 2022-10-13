from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementconfigsyncstate
from . import configmanagementhierarchycontrollerstate
from . import configmanagementmembershipspec
from . import configmanagementoperatorstate
from . import configmanagementpolicycontrollerstate


@dataclass_json
@dataclass
class ConfigManagementMembershipState:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    config_sync_state: Optional[configmanagementconfigsyncstate.ConfigManagementConfigSyncState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSyncState' }})
    hierarchy_controller_state: Optional[configmanagementhierarchycontrollerstate.ConfigManagementHierarchyControllerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchyControllerState' }})
    membership_spec: Optional[configmanagementmembershipspec.ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipSpec' }})
    operator_state: Optional[configmanagementoperatorstate.ConfigManagementOperatorState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorState' }})
    policy_controller_state: Optional[configmanagementpolicycontrollerstate.ConfigManagementPolicyControllerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyControllerState' }})
    
