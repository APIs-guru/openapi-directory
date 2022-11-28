package shared

// CustomEventStatus
// The original custom event that was inserted and whether there were any errors.
type CustomEventStatus struct {
	CustomEvent *CustomEvent       `json:"customEvent,omitempty"`
	Errors      []CustomEventError `json:"errors,omitempty"`
	Kind        *string            `json:"kind,omitempty"`
}
