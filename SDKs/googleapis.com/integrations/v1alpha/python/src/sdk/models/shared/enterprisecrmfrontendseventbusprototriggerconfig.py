from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoworkflowalertconfig
from . import enterprisecrmeventbusprotocoordinate
from . import enterprisecrmeventbusprotonexttask
from . import enterprisecrmeventbusprototriggercriteria

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


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoTriggerConfig:
    alert_config: Optional[List[enterprisecrmeventbusprotoworkflowalertconfig.EnterpriseCrmEventbusProtoWorkflowAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled_clients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledClients' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    next_tasks_execution_policy: Optional[EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasksExecutionPolicy' }})
    pause_workflow_executions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pauseWorkflowExecutions' }})
    position: Optional[enterprisecrmeventbusprotocoordinate.EnterpriseCrmEventbusProtoCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    start_tasks: Optional[List[enterprisecrmeventbusprotonexttask.EnterpriseCrmEventbusProtoNextTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTasks' }})
    trigger_criteria: Optional[enterprisecrmeventbusprototriggercriteria.EnterpriseCrmEventbusProtoTriggerCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerCriteria' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    trigger_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerNumber' }})
    trigger_type: Optional[EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    
