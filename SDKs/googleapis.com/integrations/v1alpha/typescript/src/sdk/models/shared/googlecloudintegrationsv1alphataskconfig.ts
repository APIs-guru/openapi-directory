import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
import { GoogleCloudIntegrationsV1alphaEventParameter } from "./googlecloudintegrationsv1alphaeventparameter";
import { GoogleCloudIntegrationsV1alphaSuccessPolicy } from "./googlecloudintegrationsv1alphasuccesspolicy";
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";

export enum GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum {
    JsonValidationOptionUnspecified = "JSON_VALIDATION_OPTION_UNSPECIFIED"
,    Skip = "SKIP"
,    PreExecution = "PRE_EXECUTION"
,    PostExecution = "POST_EXECUTION"
,    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
,    RunAllMatch = "RUN_ALL_MATCH"
,    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum {
    TaskExecutionStrategyUnspecified = "TASK_EXECUTION_STRATEGY_UNSPECIFIED"
,    WhenAllSucceed = "WHEN_ALL_SUCCEED"
,    WhenAnySucceed = "WHEN_ANY_SUCCEED"
,    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}


// GoogleCloudIntegrationsV1alphaTaskConfig
/** 
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
**/
export class GoogleCloudIntegrationsV1alphaTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=failurePolicy" })
  failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

  @Metadata({ data: "json, name=jsonValidationOption" })
  jsonValidationOption?: GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;

  @Metadata({ data: "json, name=nextTasks", elemType: shared.GoogleCloudIntegrationsV1alphaNextTask })
  nextTasks?: GoogleCloudIntegrationsV1alphaNextTask[];

  @Metadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudIntegrationsV1alphaEventParameter })
  parameters?: Map<string, GoogleCloudIntegrationsV1alphaEventParameter>;

  @Metadata({ data: "json, name=successPolicy" })
  successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy;

  @Metadata({ data: "json, name=synchronousCallFailurePolicy" })
  synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

  @Metadata({ data: "json, name=task" })
  task?: string;

  @Metadata({ data: "json, name=taskExecutionStrategy" })
  taskExecutionStrategy?: GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskTemplate" })
  taskTemplate?: string;
}
