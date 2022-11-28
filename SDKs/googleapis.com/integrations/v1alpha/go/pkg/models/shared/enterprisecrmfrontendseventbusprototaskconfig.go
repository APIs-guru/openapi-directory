package shared

type EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumUnspecifiedJSONValidationOption EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum = "UNSPECIFIED_JSON_VALIDATION_OPTION"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumSkip                            EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum = "SKIP"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumPreExecution                    EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum = "PRE_EXECUTION"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumPostExecution                   EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum = "POST_EXECUTION"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnumPrePostExecution                EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum = "PRE_POST_EXECUTION"
)

type EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumUnspecified   EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum = "UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumRunAllMatch   EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum = "RUN_ALL_MATCH"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnumRunFirstMatch EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum = "RUN_FIRST_MATCH"
)

type EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAllSucceed                   EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum = "WHEN_ALL_SUCCEED"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAnySucceed                   EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum = "WHEN_ANY_SUCCEED"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnumWhenAllTasksAndConditionsSucceed EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
)

type EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumTask         EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum = "TASK"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumAsisTemplate EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum = "ASIS_TEMPLATE"
	EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnumIoTemplate   EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum = "IO_TEMPLATE"
)

// EnterpriseCrmFrontendsEventbusProtoTaskConfig
// The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
type EnterpriseCrmFrontendsEventbusProtoTaskConfig struct {
	AlertConfigs                 []EnterpriseCrmEventbusProtoTaskAlertConfig                                `json:"alertConfigs,omitempty"`
	CreateTime                   *string                                                                    `json:"createTime,omitempty"`
	CreatorEmail                 *string                                                                    `json:"creatorEmail,omitempty"`
	Description                  *string                                                                    `json:"description,omitempty"`
	DisableStrictTypeValidation  *bool                                                                      `json:"disableStrictTypeValidation,omitempty"`
	FailurePolicy                *EnterpriseCrmEventbusProtoFailurePolicy                                   `json:"failurePolicy,omitempty"`
	IncomingEdgeCount            *int32                                                                     `json:"incomingEdgeCount,omitempty"`
	JSONValidationOption         *EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum     `json:"jsonValidationOption,omitempty"`
	Label                        *string                                                                    `json:"label,omitempty"`
	LastModifiedTime             *string                                                                    `json:"lastModifiedTime,omitempty"`
	NextTasks                    []EnterpriseCrmEventbusProtoNextTask                                       `json:"nextTasks,omitempty"`
	NextTasksExecutionPolicy     *EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy,omitempty"`
	Parameters                   map[string]EnterpriseCrmFrontendsEventbusProtoParameterEntry               `json:"parameters,omitempty"`
	Position                     *EnterpriseCrmEventbusProtoCoordinate                                      `json:"position,omitempty"`
	Precondition                 *string                                                                    `json:"precondition,omitempty"`
	PreconditionLabel            *string                                                                    `json:"preconditionLabel,omitempty"`
	RollbackStrategy             *EnterpriseCrmFrontendsEventbusProtoRollbackStrategy                       `json:"rollbackStrategy,omitempty"`
	SuccessPolicy                *EnterpriseCrmEventbusProtoSuccessPolicy                                   `json:"successPolicy,omitempty"`
	SynchronousCallFailurePolicy *EnterpriseCrmEventbusProtoFailurePolicy                                   `json:"synchronousCallFailurePolicy,omitempty"`
	TaskEntity                   *EnterpriseCrmFrontendsEventbusProtoTaskEntity                             `json:"taskEntity,omitempty"`
	TaskExecutionStrategy        *EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum    `json:"taskExecutionStrategy,omitempty"`
	TaskName                     *string                                                                    `json:"taskName,omitempty"`
	TaskNumber                   *string                                                                    `json:"taskNumber,omitempty"`
	TaskSpec                     *string                                                                    `json:"taskSpec,omitempty"`
	TaskTemplateName             *string                                                                    `json:"taskTemplateName,omitempty"`
	TaskType                     *EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum                 `json:"taskType,omitempty"`
}
