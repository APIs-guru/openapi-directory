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
	ClientID          *string                                                 `json:"clientId,omitempty"`
	EnumFilterType    *EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum `json:"enumFilterType,omitempty"`
	ErrorEnumString   *string                                                 `json:"errorEnumString,omitempty"`
	RetryAttempt      *EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum   `json:"retryAttempt,omitempty"`
	TaskName          *string                                                 `json:"taskName,omitempty"`
	TaskNumber        *string                                                 `json:"taskNumber,omitempty"`
	TriggerID         *string                                                 `json:"triggerId,omitempty"`
	WarningEnumString *string                                                 `json:"warningEnumString,omitempty"`
	WorkflowID        *string                                                 `json:"workflowId,omitempty"`
	WorkflowName      *string                                                 `json:"workflowName,omitempty"`
}
