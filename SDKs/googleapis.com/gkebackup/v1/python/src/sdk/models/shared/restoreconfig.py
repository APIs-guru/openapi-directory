from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RestoreConfigClusterResourceConflictPolicyEnum(str, Enum):
    CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED = "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED"
    USE_EXISTING_VERSION = "USE_EXISTING_VERSION"
    USE_BACKUP_VERSION = "USE_BACKUP_VERSION"

class RestoreConfigNamespacedResourceRestoreModeEnum(str, Enum):
    NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED = "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED"
    DELETE_AND_RESTORE = "DELETE_AND_RESTORE"
    FAIL_ON_CONFLICT = "FAIL_ON_CONFLICT"

class RestoreConfigVolumeDataRestorePolicyEnum(str, Enum):
    VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED = "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
    RESTORE_VOLUME_DATA_FROM_BACKUP = "RESTORE_VOLUME_DATA_FROM_BACKUP"
    REUSE_VOLUME_HANDLE_FROM_BACKUP = "REUSE_VOLUME_HANDLE_FROM_BACKUP"
    NO_VOLUME_DATA_RESTORATION = "NO_VOLUME_DATA_RESTORATION"


@dataclass_json
@dataclass
class RestoreConfig:
    r"""RestoreConfig
    Configuration of a restore. Next id: 9
    """
    
    all_namespaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allNamespaces') }})
    cluster_resource_conflict_policy: Optional[RestoreConfigClusterResourceConflictPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterResourceConflictPolicy') }})
    cluster_resource_restore_scope: Optional[ClusterResourceRestoreScope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterResourceRestoreScope') }})
    namespaced_resource_restore_mode: Optional[RestoreConfigNamespacedResourceRestoreModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedResourceRestoreMode') }})
    selected_applications: Optional[NamespacedNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedApplications') }})
    selected_namespaces: Optional[Namespaces] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedNamespaces') }})
    substitution_rules: Optional[List[SubstitutionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substitutionRules') }})
    volume_data_restore_policy: Optional[RestoreConfigVolumeDataRestorePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeDataRestorePolicy') }})
    
