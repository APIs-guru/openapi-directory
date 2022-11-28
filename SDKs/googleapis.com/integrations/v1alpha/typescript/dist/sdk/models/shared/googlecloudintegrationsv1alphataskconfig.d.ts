import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
import { GoogleCloudIntegrationsV1alphaEventParameter } from "./googlecloudintegrationsv1alphaeventparameter";
import { GoogleCloudIntegrationsV1alphaSuccessPolicy } from "./googlecloudintegrationsv1alphasuccesspolicy";
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum {
    JsonValidationOptionUnspecified = "JSON_VALIDATION_OPTION_UNSPECIFIED",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
export declare enum GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum {
    TaskExecutionStrategyUnspecified = "TASK_EXECUTION_STRATEGY_UNSPECIFIED",
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
**/
export declare class GoogleCloudIntegrationsV1alphaTaskConfig extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;
    jsonValidationOption?: GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;
    nextTasks?: GoogleCloudIntegrationsV1alphaNextTask[];
    nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;
    parameters?: Map<string, GoogleCloudIntegrationsV1alphaEventParameter>;
    successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy;
    synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;
    task?: string;
    taskExecutionStrategy?: GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;
    taskId?: string;
    taskTemplate?: string;
}
