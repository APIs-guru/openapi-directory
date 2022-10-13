package shared

type RegisterDebuggeeResponse struct {
	AgentID  *string   `json:"agentId"`
	Debuggee *Debuggee `json:"debuggee"`
}
