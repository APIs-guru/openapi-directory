from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudIntegrationsV1alphaIntegrationVersion
    The integration version definition.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database_persistence_policy: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databasePersistencePolicy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    integration_parameters: Optional[List[GoogleCloudIntegrationsV1alphaIntegrationParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationParameters') }})
    integration_parameters_internal: Optional[EnterpriseCrmFrontendsEventbusProtoWorkflowParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationParametersInternal') }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifierEmail') }})
    lock_holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockHolder') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    parent_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentTemplateId') }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotNumber') }})
    state: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_configs: Optional[List[GoogleCloudIntegrationsV1alphaTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskConfigs') }})
    task_configs_internal: Optional[List[EnterpriseCrmFrontendsEventbusProtoTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskConfigsInternal') }})
    teardown: Optional[EnterpriseCrmEventbusProtoTeardown] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardown') }})
    trigger_configs: Optional[List[GoogleCloudIntegrationsV1alphaTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigs') }})
    trigger_configs_internal: Optional[List[EnterpriseCrmFrontendsEventbusProtoTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigsInternal') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabel') }})
    
