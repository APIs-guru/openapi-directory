package shared

type RegisterDebuggeeRequest struct {
	Debuggee *Debuggee `json:"debuggee,omitempty"`
}
