package shared

type EventRecordFailureFailureCauseEnum string

const (
	EventRecordFailureFailureCauseEnumEventUpdateFailureCauseUnspecified EventRecordFailureFailureCauseEnum = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"
	EventRecordFailureFailureCauseEnumNotFound                           EventRecordFailureFailureCauseEnum = "NOT_FOUND"
	EventRecordFailureFailureCauseEnumInvalidUpdateValue                 EventRecordFailureFailureCauseEnum = "INVALID_UPDATE_VALUE"
)

type EventRecordFailure struct {
	EventID      *string                             `json:"eventId"`
	FailureCause *EventRecordFailureFailureCauseEnum `json:"failureCause"`
	Kind         *string                             `json:"kind"`
}
