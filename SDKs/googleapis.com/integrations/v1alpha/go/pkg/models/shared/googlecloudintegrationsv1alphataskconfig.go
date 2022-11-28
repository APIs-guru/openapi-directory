package shared

type GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum string

const (
	GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnumJSONValidationOptionUnspecified GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum = "JSON_VALIDATION_OPTION_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnumSkip                            GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum = "SKIP"
	GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnumPreExecution                    GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum = "PRE_EXECUTION"
	GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnumPostExecution                   GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum = "POST_EXECUTION"
	GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnumPrePostExecution                GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum = "PRE_POST_EXECUTION"
)

type GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum string

const (
	GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnumNextTasksExecutionPolicyUnspecified GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnumRunAllMatch                         GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum = "RUN_ALL_MATCH"
	GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnumRunFirstMatch                       GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum = "RUN_FIRST_MATCH"
)

type GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum string

const (
	GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnumTaskExecutionStrategyUnspecified GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum = "TASK_EXECUTION_STRATEGY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnumWhenAllSucceed                   GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum = "WHEN_ALL_SUCCEED"
	GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnumWhenAnySucceed                   GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum = "WHEN_ANY_SUCCEED"
	GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnumWhenAllTasksAndConditionsSucceed GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
)

// GoogleCloudIntegrationsV1alphaTaskConfig
// The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
type GoogleCloudIntegrationsV1alphaTaskConfig struct {
	Description                  *string                                                               `json:"description,omitempty"`
	DisplayName                  *string                                                               `json:"displayName,omitempty"`
	FailurePolicy                *GoogleCloudIntegrationsV1alphaFailurePolicy                          `json:"failurePolicy,omitempty"`
	JSONValidationOption         *GoogleCloudIntegrationsV1alphaTaskConfigJSONValidationOptionEnum     `json:"jsonValidationOption,omitempty"`
	NextTasks                    []GoogleCloudIntegrationsV1alphaNextTask                              `json:"nextTasks,omitempty"`
	NextTasksExecutionPolicy     *GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy,omitempty"`
	Parameters                   map[string]GoogleCloudIntegrationsV1alphaEventParameter               `json:"parameters,omitempty"`
	SuccessPolicy                *GoogleCloudIntegrationsV1alphaSuccessPolicy                          `json:"successPolicy,omitempty"`
	SynchronousCallFailurePolicy *GoogleCloudIntegrationsV1alphaFailurePolicy                          `json:"synchronousCallFailurePolicy,omitempty"`
	Task                         *string                                                               `json:"task,omitempty"`
	TaskExecutionStrategy        *GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum    `json:"taskExecutionStrategy,omitempty"`
	TaskID                       *string                                                               `json:"taskId,omitempty"`
	TaskTemplate                 *string                                                               `json:"taskTemplate,omitempty"`
}
