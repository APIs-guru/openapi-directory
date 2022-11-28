package shared

// GetBreakpointResponse
// Response for getting breakpoint information.
type GetBreakpointResponse struct {
	Breakpoint *Breakpoint `json:"breakpoint,omitempty"`
}
