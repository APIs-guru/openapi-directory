from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EnterpriseCrmFrontendsEventbusProtoTaskConfig
    The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
    """
    
    alert_configs: Optional[List[EnterpriseCrmEventbusProtoTaskAlertConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertConfigs') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disable_strict_type_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableStrictTypeValidation') }})
    failure_policy: Optional[EnterpriseCrmEventbusProtoFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failurePolicy') }})
    incoming_edge_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomingEdgeCount') }})
    json_validation_option: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonValidationOption') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    next_tasks: Optional[List[EnterpriseCrmEventbusProtoNextTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasks') }})
    next_tasks_execution_policy: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasksExecutionPolicy') }})
    parameters: Optional[dict[str, EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    position: Optional[EnterpriseCrmEventbusProtoCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    precondition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precondition') }})
    precondition_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preconditionLabel') }})
    rollback_strategy: Optional[EnterpriseCrmFrontendsEventbusProtoRollbackStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackStrategy') }})
    success_policy: Optional[EnterpriseCrmEventbusProtoSuccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successPolicy') }})
    synchronous_call_failure_policy: Optional[EnterpriseCrmEventbusProtoFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronousCallFailurePolicy') }})
    task_entity: Optional[EnterpriseCrmFrontendsEventbusProtoTaskEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEntity') }})
    task_execution_strategy: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecutionStrategy') }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    task_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSpec') }})
    task_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTemplateName') }})
    task_type: Optional[EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
