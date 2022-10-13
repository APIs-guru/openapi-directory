from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprototaskconfig
from . import enterprisecrmeventbusprototeardown
from . import enterprisecrmfrontendseventbusprotoworkflowparameters
from . import enterprisecrmfrontendseventbusprototriggerconfig

class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum(str, Enum):
    DATABASE_PERSISTENCE_POLICY_UNSPECIFIED = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
    DATABASE_PERSISTENCE_DISABLED = "DATABASE_PERSISTENCE_DISABLED"

class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    database_persistence_policy: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databasePersistencePolicy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifierEmail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_integration_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntegrationVersionId' }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotNumber' }})
    status: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_configs: Optional[List[enterprisecrmfrontendseventbusprototaskconfig.EnterpriseCrmFrontendsEventbusProtoTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskConfigs' }})
    teardown: Optional[enterprisecrmeventbusprototeardown.EnterpriseCrmEventbusProtoTeardown] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teardown' }})
    template_parameters: Optional[enterprisecrmfrontendseventbusprotoworkflowparameters.EnterpriseCrmFrontendsEventbusProtoWorkflowParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateParameters' }})
    trigger_configs: Optional[List[enterprisecrmfrontendseventbusprototriggerconfig.EnterpriseCrmFrontendsEventbusProtoTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfigs' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabel' }})
    
