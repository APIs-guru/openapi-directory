package shared

type EventTrigger struct {
	EventType     *string        `json:"eventType"`
	FailurePolicy *FailurePolicy `json:"failurePolicy"`
	Resource      *string        `json:"resource"`
	Service       *string        `json:"service"`
}
