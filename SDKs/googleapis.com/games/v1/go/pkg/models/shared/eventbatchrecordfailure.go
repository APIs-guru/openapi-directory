package shared

type EventBatchRecordFailureFailureCauseEnum string

const (
	EventBatchRecordFailureFailureCauseEnumEventFailureCauseUnspecified EventBatchRecordFailureFailureCauseEnum = "EVENT_FAILURE_CAUSE_UNSPECIFIED"
	EventBatchRecordFailureFailureCauseEnumTooLarge                     EventBatchRecordFailureFailureCauseEnum = "TOO_LARGE"
	EventBatchRecordFailureFailureCauseEnumTimePeriodExpired            EventBatchRecordFailureFailureCauseEnum = "TIME_PERIOD_EXPIRED"
	EventBatchRecordFailureFailureCauseEnumTimePeriodShort              EventBatchRecordFailureFailureCauseEnum = "TIME_PERIOD_SHORT"
	EventBatchRecordFailureFailureCauseEnumTimePeriodLong               EventBatchRecordFailureFailureCauseEnum = "TIME_PERIOD_LONG"
	EventBatchRecordFailureFailureCauseEnumAlreadyUpdated               EventBatchRecordFailureFailureCauseEnum = "ALREADY_UPDATED"
	EventBatchRecordFailureFailureCauseEnumRecordRateHigh               EventBatchRecordFailureFailureCauseEnum = "RECORD_RATE_HIGH"
)

type EventBatchRecordFailure struct {
	FailureCause *EventBatchRecordFailureFailureCauseEnum `json:"failureCause"`
	Kind         *string                                  `json:"kind"`
	Range        *EventPeriodRange                        `json:"range"`
}
