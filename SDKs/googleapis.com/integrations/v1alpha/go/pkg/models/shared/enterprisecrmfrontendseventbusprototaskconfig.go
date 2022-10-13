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

type EnterpriseCrmFrontendsEventbusProtoTaskConfig struct {
	AlertConfigs                 []EnterpriseCrmEventbusProtoTaskAlertConfig                                `json:"alertConfigs"`
	CreateTime                   *string                                                                    `json:"createTime"`
	CreatorEmail                 *string                                                                    `json:"creatorEmail"`
	Description                  *string                                                                    `json:"description"`
	DisableStrictTypeValidation  *bool                                                                      `json:"disableStrictTypeValidation"`
	FailurePolicy                *EnterpriseCrmEventbusProtoFailurePolicy                                   `json:"failurePolicy"`
	IncomingEdgeCount            *int32                                                                     `json:"incomingEdgeCount"`
	JSONValidationOption         *EnterpriseCrmFrontendsEventbusProtoTaskConfigJSONValidationOptionEnum     `json:"jsonValidationOption"`
	Label                        *string                                                                    `json:"label"`
	LastModifiedTime             *string                                                                    `json:"lastModifiedTime"`
	NextTasks                    []EnterpriseCrmEventbusProtoNextTask                                       `json:"nextTasks"`
	NextTasksExecutionPolicy     *EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy"`
	Parameters                   map[string]EnterpriseCrmFrontendsEventbusProtoParameterEntry               `json:"parameters"`
	Position                     *EnterpriseCrmEventbusProtoCoordinate                                      `json:"position"`
	Precondition                 *string                                                                    `json:"precondition"`
	PreconditionLabel            *string                                                                    `json:"preconditionLabel"`
	RollbackStrategy             *EnterpriseCrmFrontendsEventbusProtoRollbackStrategy                       `json:"rollbackStrategy"`
	SuccessPolicy                *EnterpriseCrmEventbusProtoSuccessPolicy                                   `json:"successPolicy"`
	SynchronousCallFailurePolicy *EnterpriseCrmEventbusProtoFailurePolicy                                   `json:"synchronousCallFailurePolicy"`
	TaskEntity                   *EnterpriseCrmFrontendsEventbusProtoTaskEntity                             `json:"taskEntity"`
	TaskExecutionStrategy        *EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum    `json:"taskExecutionStrategy"`
	TaskName                     *string                                                                    `json:"taskName"`
	TaskNumber                   *string                                                                    `json:"taskNumber"`
	TaskSpec                     *string                                                                    `json:"taskSpec"`
	TaskTemplateName             *string                                                                    `json:"taskTemplateName"`
	TaskType                     *EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum                 `json:"taskType"`
}
