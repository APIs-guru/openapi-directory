package shared

// ListBreakpointsResponse
// Response for listing breakpoints.
type ListBreakpointsResponse struct {
	Breakpoints   []Breakpoint `json:"breakpoints,omitempty"`
	NextWaitToken *string      `json:"nextWaitToken,omitempty"`
}
