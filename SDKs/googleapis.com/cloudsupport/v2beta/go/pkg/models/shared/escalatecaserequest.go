package shared

// EscalateCaseRequest
// The request message for the EscalateCase endpoint.
type EscalateCaseRequest struct {
	Escalation *Escalation `json:"escalation,omitempty"`
}
