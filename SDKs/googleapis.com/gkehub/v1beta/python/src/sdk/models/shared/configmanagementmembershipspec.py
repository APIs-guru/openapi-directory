from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementbinauthzconfig
from . import configmanagementconfigsync
from . import configmanagementhierarchycontrollerconfig
from . import configmanagementpolicycontroller


@dataclass_json
@dataclass
class ConfigManagementMembershipSpec:
    binauthz: Optional[configmanagementbinauthzconfig.ConfigManagementBinauthzConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binauthz' }})
    config_sync: Optional[configmanagementconfigsync.ConfigManagementConfigSync] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSync' }})
    hierarchy_controller: Optional[configmanagementhierarchycontrollerconfig.ConfigManagementHierarchyControllerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchyController' }})
    policy_controller: Optional[configmanagementpolicycontroller.ConfigManagementPolicyController] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyController' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
