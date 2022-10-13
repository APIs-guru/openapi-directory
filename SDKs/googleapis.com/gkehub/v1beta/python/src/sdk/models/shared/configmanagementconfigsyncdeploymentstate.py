from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateGitSyncEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateImporterEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateMonitorEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateSyncerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ConfigManagementConfigSyncDeploymentState:
    admission_webhook: Optional[ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admissionWebhook' }})
    git_sync: Optional[ConfigManagementConfigSyncDeploymentStateGitSyncEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitSync' }})
    importer: Optional[ConfigManagementConfigSyncDeploymentStateImporterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importer' }})
    monitor: Optional[ConfigManagementConfigSyncDeploymentStateMonitorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    reconciler_manager: Optional[ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconcilerManager' }})
    root_reconciler: Optional[ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootReconciler' }})
    syncer: Optional[ConfigManagementConfigSyncDeploymentStateSyncerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncer' }})
    
