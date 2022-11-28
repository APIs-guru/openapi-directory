import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
import { GoogleCloudIntegrationsV1alphaEventParameter } from "./googlecloudintegrationsv1alphaeventparameter";
import { GoogleCloudIntegrationsV1alphaSuccessPolicy } from "./googlecloudintegrationsv1alphasuccesspolicy";


export enum GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum {
    JsonValidationOptionUnspecified = "JSON_VALIDATION_OPTION_UNSPECIFIED",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum {
    TaskExecutionStrategyUnspecified = "TASK_EXECUTION_STRATEGY_UNSPECIFIED",
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}


// GoogleCloudIntegrationsV1alphaTaskConfig
/** 
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
**/
export class GoogleCloudIntegrationsV1alphaTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=failurePolicy" })
  failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

  @SpeakeasyMetadata({ data: "json, name=jsonValidationOption" })
  jsonValidationOption?: GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=nextTasks", elemType: GoogleCloudIntegrationsV1alphaNextTask })
  nextTasks?: GoogleCloudIntegrationsV1alphaNextTask[];

  @SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudIntegrationsV1alphaEventParameter })
  parameters?: Map<string, GoogleCloudIntegrationsV1alphaEventParameter>;

  @SpeakeasyMetadata({ data: "json, name=successPolicy" })
  successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy;

  @SpeakeasyMetadata({ data: "json, name=synchronousCallFailurePolicy" })
  synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;

  @SpeakeasyMetadata({ data: "json, name=taskExecutionStrategy" })
  taskExecutionStrategy?: GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskTemplate" })
  taskTemplate?: string;
}
