from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput:
    r"""GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput
    IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
    """
    
    database_persistence_policy: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databasePersistencePolicy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifierEmail') }})
    parent_integration_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntegrationVersionId') }})
    status: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_configs: Optional[List[EnterpriseCrmFrontendsEventbusProtoTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskConfigs') }})
    teardown: Optional[EnterpriseCrmEventbusProtoTeardown] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardown') }})
    template_parameters: Optional[EnterpriseCrmFrontendsEventbusProtoWorkflowParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateParameters') }})
    trigger_configs: Optional[List[EnterpriseCrmFrontendsEventbusProtoTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigs') }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabel') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion:
    r"""GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion
    IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database_persistence_policy: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databasePersistencePolicy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_modifier_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifierEmail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_integration_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntegrationVersionId') }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotNumber') }})
    status: Optional[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_configs: Optional[List[EnterpriseCrmFrontendsEventbusProtoTaskConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskConfigs') }})
    teardown: Optional[EnterpriseCrmEventbusProtoTeardown] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardown') }})
    template_parameters: Optional[EnterpriseCrmFrontendsEventbusProtoWorkflowParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateParameters') }})
    trigger_configs: Optional[List[EnterpriseCrmFrontendsEventbusProtoTriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigs') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabel') }})
    
