package shared

// RegisterDebuggeeResponse
// Response for registering a debuggee.
type RegisterDebuggeeResponse struct {
	AgentID  *string   `json:"agentId,omitempty"`
	Debuggee *Debuggee `json:"debuggee,omitempty"`
}
