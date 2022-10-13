from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototaskalertconfig
from . import enterprisecrmeventbusprotofailurepolicy
from . import enterprisecrmeventbusprotonexttask
from . import enterprisecrmfrontendseventbusprotoparameterentry
from . import enterprisecrmeventbusprotocoordinate
from . import enterprisecrmfrontendseventbusprotorollbackstrategy
from . import enterprisecrmeventbusprotosuccesspolicy
from . import enterprisecrmeventbusprotofailurepolicy
from . import enterprisecrmfrontendseventbusprototaskentity

class EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum(str, Enum):
    UNSPECIFIED_JSON_VALIDATION_OPTION = "UNSPECIFIED_JSON_VALIDATION_OPTION"
    SKIP = "SKIP"
    PRE_EXECUTION = "PRE_EXECUTION"
    POST_EXECUTION = "POST_EXECUTION"
    PRE_POST_EXECUTION = "PRE_POST_EXECUTION"

class EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RUN_ALL_MATCH = "RUN_ALL_MATCH"
    RUN_FIRST_MATCH = "RUN_FIRST_MATCH"

class EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum(str, Enum):
    WHEN_ALL_SUCCEED = "WHEN_ALL_SUCCEED"
    WHEN_ANY_SUCCEED = "WHEN_ANY_SUCCEED"
    WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"

class EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum(str, Enum):
    TASK = "TASK"
    ASIS_TEMPLATE = "ASIS_TEMPLATE"
    IO_TEMPLATE = "IO_TEMPLATE"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoTaskConfig:
    alert_configs: Optional[List[enterprisecrmeventbusprototaskalertconfig.EnterpriseCrmEventbusProtoTaskAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertConfigs' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorEmail' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_strict_type_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableStrictTypeValidation' }})
    failure_policy: Optional[enterprisecrmeventbusprotofailurepolicy.EnterpriseCrmEventbusProtoFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failurePolicy' }})
    incoming_edge_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomingEdgeCount' }})
    json_validation_option: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonValidationOption' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    next_tasks: Optional[List[enterprisecrmeventbusprotonexttask.EnterpriseCrmEventbusProtoNextTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasks' }})
    next_tasks_execution_policy: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasksExecutionPolicy' }})
    parameters: Optional[dict[str, enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    position: Optional[enterprisecrmeventbusprotocoordinate.EnterpriseCrmEventbusProtoCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    precondition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precondition' }})
    precondition_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preconditionLabel' }})
    rollback_strategy: Optional[enterprisecrmfrontendseventbusprotorollbackstrategy.EnterpriseCrmFrontendsEventbusProtoRollbackStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackStrategy' }})
    success_policy: Optional[enterprisecrmeventbusprotosuccesspolicy.EnterpriseCrmEventbusProtoSuccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successPolicy' }})
    synchronous_call_failure_policy: Optional[enterprisecrmeventbusprotofailurepolicy.EnterpriseCrmEventbusProtoFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synchronousCallFailurePolicy' }})
    task_entity: Optional[enterprisecrmfrontendseventbusprototaskentity.EnterpriseCrmFrontendsEventbusProtoTaskEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskEntity' }})
    task_execution_strategy: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionStrategy' }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskName' }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    task_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSpec' }})
    task_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskTemplateName' }})
    task_type: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskType' }})
    
