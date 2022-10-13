package shared

type EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum string

const (
	EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnumDefaultInclusive EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum = "DEFAULT_INCLUSIVE"
	EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnumExclusive        EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum = "EXCLUSIVE"
)

type EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum string

const (
	EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumUnspecified EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumFinal       EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum = "FINAL"
	EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumRetryable   EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum = "RETRYABLE"
	EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnumCanceled    EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum = "CANCELED"
)

type EnterpriseCrmEventbusStatsDimensions struct {
	ClientID          *string                                                 `json:"clientId"`
	EnumFilterType    *EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum `json:"enumFilterType"`
	ErrorEnumString   *string                                                 `json:"errorEnumString"`
	RetryAttempt      *EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum   `json:"retryAttempt"`
	TaskName          *string                                                 `json:"taskName"`
	TaskNumber        *string                                                 `json:"taskNumber"`
	TriggerID         *string                                                 `json:"triggerId"`
	WarningEnumString *string                                                 `json:"warningEnumString"`
	WorkflowID        *string                                                 `json:"workflowId"`
	WorkflowName      *string                                                 `json:"workflowName"`
}
