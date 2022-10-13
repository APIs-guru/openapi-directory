from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaintegrationalertconfig
from . import googlecloudintegrationsv1alphanexttask

class GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum(str, Enum):
    NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
    RUN_ALL_MATCH = "RUN_ALL_MATCH"
    RUN_FIRST_MATCH = "RUN_FIRST_MATCH"

class GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum(str, Enum):
    TRIGGER_TYPE_UNSPECIFIED = "TRIGGER_TYPE_UNSPECIFIED"
    CRON = "CRON"
    API = "API"
    SFDC_CHANNEL = "SFDC_CHANNEL"
    CLOUD_PUBSUB_EXTERNAL = "CLOUD_PUBSUB_EXTERNAL"
    SFDC_CDC_CHANNEL = "SFDC_CDC_CHANNEL"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaTriggerConfig:
    alert_config: Optional[List[googlecloudintegrationsv1alphaintegrationalertconfig.GoogleCloudIntegrationsV1alphaIntegrationAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    next_tasks_execution_policy: Optional[GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasksExecutionPolicy' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    start_tasks: Optional[List[googlecloudintegrationsv1alphanexttask.GoogleCloudIntegrationsV1alphaNextTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTasks' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    trigger_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerNumber' }})
    trigger_type: Optional[GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    
