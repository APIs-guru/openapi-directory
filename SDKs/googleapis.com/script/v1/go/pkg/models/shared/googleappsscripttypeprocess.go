package shared

type GoogleAppsScriptTypeProcessProcessStatusEnum string

const (
	GoogleAppsScriptTypeProcessProcessStatusEnumProcessStatusUnspecified GoogleAppsScriptTypeProcessProcessStatusEnum = "PROCESS_STATUS_UNSPECIFIED"
	GoogleAppsScriptTypeProcessProcessStatusEnumRunning                  GoogleAppsScriptTypeProcessProcessStatusEnum = "RUNNING"
	GoogleAppsScriptTypeProcessProcessStatusEnumPaused                   GoogleAppsScriptTypeProcessProcessStatusEnum = "PAUSED"
	GoogleAppsScriptTypeProcessProcessStatusEnumCompleted                GoogleAppsScriptTypeProcessProcessStatusEnum = "COMPLETED"
	GoogleAppsScriptTypeProcessProcessStatusEnumCanceled                 GoogleAppsScriptTypeProcessProcessStatusEnum = "CANCELED"
	GoogleAppsScriptTypeProcessProcessStatusEnumFailed                   GoogleAppsScriptTypeProcessProcessStatusEnum = "FAILED"
	GoogleAppsScriptTypeProcessProcessStatusEnumTimedOut                 GoogleAppsScriptTypeProcessProcessStatusEnum = "TIMED_OUT"
	GoogleAppsScriptTypeProcessProcessStatusEnumUnknown                  GoogleAppsScriptTypeProcessProcessStatusEnum = "UNKNOWN"
	GoogleAppsScriptTypeProcessProcessStatusEnumDelayed                  GoogleAppsScriptTypeProcessProcessStatusEnum = "DELAYED"
)

type GoogleAppsScriptTypeProcessProcessTypeEnum string

const (
	GoogleAppsScriptTypeProcessProcessTypeEnumProcessTypeUnspecified GoogleAppsScriptTypeProcessProcessTypeEnum = "PROCESS_TYPE_UNSPECIFIED"
	GoogleAppsScriptTypeProcessProcessTypeEnumAddOn                  GoogleAppsScriptTypeProcessProcessTypeEnum = "ADD_ON"
	GoogleAppsScriptTypeProcessProcessTypeEnumExecutionAPI           GoogleAppsScriptTypeProcessProcessTypeEnum = "EXECUTION_API"
	GoogleAppsScriptTypeProcessProcessTypeEnumTimeDriven             GoogleAppsScriptTypeProcessProcessTypeEnum = "TIME_DRIVEN"
	GoogleAppsScriptTypeProcessProcessTypeEnumTrigger                GoogleAppsScriptTypeProcessProcessTypeEnum = "TRIGGER"
	GoogleAppsScriptTypeProcessProcessTypeEnumWebapp                 GoogleAppsScriptTypeProcessProcessTypeEnum = "WEBAPP"
	GoogleAppsScriptTypeProcessProcessTypeEnumEditor                 GoogleAppsScriptTypeProcessProcessTypeEnum = "EDITOR"
	GoogleAppsScriptTypeProcessProcessTypeEnumSimpleTrigger          GoogleAppsScriptTypeProcessProcessTypeEnum = "SIMPLE_TRIGGER"
	GoogleAppsScriptTypeProcessProcessTypeEnumMenu                   GoogleAppsScriptTypeProcessProcessTypeEnum = "MENU"
	GoogleAppsScriptTypeProcessProcessTypeEnumBatchTask              GoogleAppsScriptTypeProcessProcessTypeEnum = "BATCH_TASK"
)

type GoogleAppsScriptTypeProcessUserAccessLevelEnum string

const (
	GoogleAppsScriptTypeProcessUserAccessLevelEnumUserAccessLevelUnspecified GoogleAppsScriptTypeProcessUserAccessLevelEnum = "USER_ACCESS_LEVEL_UNSPECIFIED"
	GoogleAppsScriptTypeProcessUserAccessLevelEnumNone                       GoogleAppsScriptTypeProcessUserAccessLevelEnum = "NONE"
	GoogleAppsScriptTypeProcessUserAccessLevelEnumRead                       GoogleAppsScriptTypeProcessUserAccessLevelEnum = "READ"
	GoogleAppsScriptTypeProcessUserAccessLevelEnumWrite                      GoogleAppsScriptTypeProcessUserAccessLevelEnum = "WRITE"
	GoogleAppsScriptTypeProcessUserAccessLevelEnumOwner                      GoogleAppsScriptTypeProcessUserAccessLevelEnum = "OWNER"
)

type GoogleAppsScriptTypeProcess struct {
	Duration        *string                                         `json:"duration,omitempty"`
	FunctionName    *string                                         `json:"functionName,omitempty"`
	ProcessStatus   *GoogleAppsScriptTypeProcessProcessStatusEnum   `json:"processStatus,omitempty"`
	ProcessType     *GoogleAppsScriptTypeProcessProcessTypeEnum     `json:"processType,omitempty"`
	ProjectName     *string                                         `json:"projectName,omitempty"`
	StartTime       *string                                         `json:"startTime,omitempty"`
	UserAccessLevel *GoogleAppsScriptTypeProcessUserAccessLevelEnum `json:"userAccessLevel,omitempty"`
}
