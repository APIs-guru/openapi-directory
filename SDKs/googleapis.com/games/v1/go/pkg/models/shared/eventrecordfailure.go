package shared




type EventRecordFailureFailureCauseEnum string

const (
    EventRecordFailureFailureCauseEnumEventUpdateFailureCauseUnspecified EventRecordFailureFailureCauseEnum = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"
EventRecordFailureFailureCauseEnumNotFound EventRecordFailureFailureCauseEnum = "NOT_FOUND"
EventRecordFailureFailureCauseEnumInvalidUpdateValue EventRecordFailureFailureCauseEnum = "INVALID_UPDATE_VALUE"
)


type EventRecordFailure struct {
    EventID *string `json:"eventId,omitempty"`
    FailureCause *EventRecordFailureFailureCauseEnum `json:"failureCause,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

