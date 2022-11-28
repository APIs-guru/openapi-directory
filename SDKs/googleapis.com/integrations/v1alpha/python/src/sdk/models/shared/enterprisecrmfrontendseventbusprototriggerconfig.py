from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RUN_ALL_MATCH = "RUN_ALL_MATCH"
    RUN_FIRST_MATCH = "RUN_FIRST_MATCH"

class EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"
    GOOPS = "GOOPS"
    SFDC_SYNC = "SFDC_SYNC"
    CRON = "CRON"
    API = "API"
    MANIFOLD_TRIGGER = "MANIFOLD_TRIGGER"
    DATALAYER_DATA_CHANGE = "DATALAYER_DATA_CHANGE"
    SFDC_CHANNEL = "SFDC_CHANNEL"
    CLOUD_PUBSUB_EXTERNAL = "CLOUD_PUBSUB_EXTERNAL"
    SFDC_CDC_CHANNEL = "SFDC_CDC_CHANNEL"
    SFDC_PLATFORM_EVENTS_CHANNEL = "SFDC_PLATFORM_EVENTS_CHANNEL"
    CLOUD_SCHEDULER = "CLOUD_SCHEDULER"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoTriggerConfig:
    r"""EnterpriseCrmFrontendsEventbusProtoTriggerConfig
    Configuration detail of a trigger. Next available id: 17
    """
    
    alert_config: Optional[List[EnterpriseCrmEventbusProtoWorkflowAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertConfig') }})
    cloud_scheduler_config: Optional[EnterpriseCrmEventbusProtoCloudSchedulerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSchedulerConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled_clients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledClients') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    next_tasks_execution_policy: Optional[EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasksExecutionPolicy') }})
    pause_workflow_executions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pauseWorkflowExecutions') }})
    position: Optional[EnterpriseCrmEventbusProtoCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    start_tasks: Optional[List[EnterpriseCrmEventbusProtoNextTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTasks') }})
    trigger_criteria: Optional[EnterpriseCrmEventbusProtoTriggerCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerCriteria') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    trigger_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerNumber') }})
    trigger_type: Optional[EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
