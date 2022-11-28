package shared

// EventTrigger
// Describes EventTrigger, used to request events be sent from another service.
type EventTrigger struct {
	EventType     *string        `json:"eventType,omitempty"`
	FailurePolicy *FailurePolicy `json:"failurePolicy,omitempty"`
	Resource      *string        `json:"resource,omitempty"`
	Service       *string        `json:"service,omitempty"`
}
