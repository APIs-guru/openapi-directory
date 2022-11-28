package shared

// SetBreakpointResponse
// Response for setting a breakpoint.
type SetBreakpointResponse struct {
	Breakpoint *Breakpoint `json:"breakpoint,omitempty"`
}
