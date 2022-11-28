package shared

// ListDebuggeesResponse
// Response for listing debuggees.
type ListDebuggeesResponse struct {
	Debuggees []Debuggee `json:"debuggees,omitempty"`
}
