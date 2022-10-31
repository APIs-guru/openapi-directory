package shared



type RegisterDebuggeeResponse struct {
    AgentID *string `json:"agentId,omitempty"`
    Debuggee *Debuggee `json:"debuggee,omitempty"`
    
}

