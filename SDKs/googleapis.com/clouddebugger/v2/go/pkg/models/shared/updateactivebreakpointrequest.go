package shared

// UpdateActiveBreakpointRequest
// Request to update an active breakpoint.
type UpdateActiveBreakpointRequest struct {
	Breakpoint *Breakpoint `json:"breakpoint,omitempty"`
}
