package shared

// RegisterDebuggeeRequest
// Request to register a debuggee.
type RegisterDebuggeeRequest struct {
	Debuggee *Debuggee `json:"debuggee,omitempty"`
}
