from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphafailurepolicy
from . import googlecloudintegrationsv1alphanexttask
from . import googlecloudintegrationsv1alphaeventparameter
from . import googlecloudintegrationsv1alphasuccesspolicy
from . import googlecloudintegrationsv1alphafailurepolicy

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
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    failure_policy: Optional[googlecloudintegrationsv1alphafailurepolicy.GoogleCloudIntegrationsV1alphaFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failurePolicy' }})
    json_validation_option: Optional[GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonValidationOption' }})
    next_tasks: Optional[List[googlecloudintegrationsv1alphanexttask.GoogleCloudIntegrationsV1alphaNextTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasks' }})
    next_tasks_execution_policy: Optional[GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTasksExecutionPolicy' }})
    parameters: Optional[dict[str, googlecloudintegrationsv1alphaeventparameter.GoogleCloudIntegrationsV1alphaEventParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    success_policy: Optional[googlecloudintegrationsv1alphasuccesspolicy.GoogleCloudIntegrationsV1alphaSuccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successPolicy' }})
    synchronous_call_failure_policy: Optional[googlecloudintegrationsv1alphafailurepolicy.GoogleCloudIntegrationsV1alphaFailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synchronousCallFailurePolicy' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    task_execution_strategy: Optional[GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionStrategy' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskTemplate' }})
    
