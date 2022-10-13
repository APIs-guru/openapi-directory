from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegrationparameter
from . import enterprisecrmfrontendseventbusprotoworkflowparameters
from . import googlecloudintegrationsv1alphataskconfig
from . import enterprisecrmfrontendseventbusprototaskconfig
from . import enterprisecrmeventbusprototeardown
from . import googlecloudintegrationsv1alphatriggerconfig
from . import enterprisecrmfrontendseventbusprototriggerconfig

class GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum(str, Enum):
    DATABASE_PERSISTENCE_POLICY_UNSPECIFIED = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
    DATABASE_PERSISTENCE_DISABLED = "DATABASE_PERSISTENCE_DISABLED"

class GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    UI = "UI"
    PIPER_V2 = "PIPER_V2"
    PIPER_V3 = "PIPER_V3"
    APPLICATION_IP_PROVISIONING = "APPLICATION_IP_PROVISIONING"

class GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum(str, Enum):
    INTEGRATION_STATE_UNSPECIFIED = "INTEGRATION_STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    SNAPSHOT = "SNAPSHOT"

class GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationVersion:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    database_persistence_policy: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databasePersistencePolicy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    integration_parameters: Optional[List[googlecloudintegrationsv1alphaintegrationparameter.GoogleCloudIntegrationsV1alphaIntegrationParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationParameters' }})
    integration_parameters_internal: Optional[enterprisecrmfrontendseventbusprotoworkflowparameters.EnterpriseCrmFrontendsEventbusProtoWorkflowParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationParametersInternal' }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifierEmail' }})
    lock_holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockHolder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origin: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    parent_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentTemplateId' }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotNumber' }})
    state: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_configs: Optional[List[googlecloudintegrationsv1alphataskconfig.GoogleCloudIntegrationsV1alphaTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskConfigs' }})
    task_configs_internal: Optional[List[enterprisecrmfrontendseventbusprototaskconfig.EnterpriseCrmFrontendsEventbusProtoTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskConfigsInternal' }})
    teardown: Optional[enterprisecrmeventbusprototeardown.EnterpriseCrmEventbusProtoTeardown] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teardown' }})
    trigger_configs: Optional[List[googlecloudintegrationsv1alphatriggerconfig.GoogleCloudIntegrationsV1alphaTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfigs' }})
    trigger_configs_internal: Optional[List[enterprisecrmfrontendseventbusprototriggerconfig.EnterpriseCrmFrontendsEventbusProtoTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfigsInternal' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabel' }})
    
