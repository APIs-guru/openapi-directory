package shared



type EventTrigger struct {
    EventType *string `json:"eventType,omitempty"`
    FailurePolicy *FailurePolicy `json:"failurePolicy,omitempty"`
    Resource *string `json:"resource,omitempty"`
    Service *string `json:"service,omitempty"`
    
}

