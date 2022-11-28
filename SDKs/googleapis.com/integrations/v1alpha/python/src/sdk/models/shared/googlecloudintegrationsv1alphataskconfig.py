from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum(str, Enum):
    JSON_VALIDATION_OPTION_UNSPECIFIED = "JSON_VALIDATION_OPTION_UNSPECIFIED"
    SKIP = "SKIP"
    PRE_EXECUTION = "PRE_EXECUTION"
    POST_EXECUTION = "POST_EXECUTION"
    PRE_POST_EXECUTION = "PRE_POST_EXECUTION"

class GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum(str, Enum):
    NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
    RUN_ALL_MATCH = "RUN_ALL_MATCH"
    RUN_FIRST_MATCH = "RUN_FIRST_MATCH"

class GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum(str, Enum):
    TASK_EXECUTION_STRATEGY_UNSPECIFIED = "TASK_EXECUTION_STRATEGY_UNSPECIFIED"
    WHEN_ALL_SUCCEED = "WHEN_ALL_SUCCEED"
    WHEN_ANY_SUCCEED = "WHEN_ANY_SUCCEED"
    WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaTaskConfig:
    r"""GoogleCloudIntegrationsV1alphaTaskConfig
    The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    failure_policy: Optional[GoogleCloudIntegrationsV1alphaFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failurePolicy') }})
    json_validation_option: Optional[GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonValidationOption') }})
    next_tasks: Optional[List[GoogleCloudIntegrationsV1alphaNextTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasks') }})
    next_tasks_execution_policy: Optional[GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTasksExecutionPolicy') }})
    parameters: Optional[dict[str, GoogleCloudIntegrationsV1alphaEventParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    success_policy: Optional[GoogleCloudIntegrationsV1alphaSuccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successPolicy') }})
    synchronous_call_failure_policy: Optional[GoogleCloudIntegrationsV1alphaFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronousCallFailurePolicy') }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    task_execution_strategy: Optional[GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecutionStrategy') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTemplate') }})
    
