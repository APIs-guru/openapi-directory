from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    CLOUD_SCHEDULER = "CLOUD_SCHEDULER"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaTriggerConfig:
    r"""GoogleCloudIntegrationsV1alphaTriggerConfig
    Configuration detail of a trigger.
    """
    
    alert_config: Optional[List[GoogleCloudIntegrationsV1alphaIntegrationAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertConfig') }})
    cloud_scheduler_config: Optional[GoogleCloudIntegrationsV1alphaCloudSchedulerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSchedulerConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    next_tasks_execution_policy: Optional[GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasksExecutionPolicy') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    start_tasks: Optional[List[GoogleCloudIntegrationsV1alphaNextTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTasks') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    trigger_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerNumber') }})
    trigger_type: Optional[GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
