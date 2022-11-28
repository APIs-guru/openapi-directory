package shared

// ListActiveBreakpointsResponse
// Response for listing active breakpoints.
type ListActiveBreakpointsResponse struct {
	Breakpoints   []Breakpoint `json:"breakpoints,omitempty"`
	NextWaitToken *string      `json:"nextWaitToken,omitempty"`
	WaitExpired   *bool        `json:"waitExpired,omitempty"`
}
