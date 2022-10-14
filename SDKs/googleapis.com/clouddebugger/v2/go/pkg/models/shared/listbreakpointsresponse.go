package shared

type ListBreakpointsResponse struct {
	Breakpoints   []Breakpoint `json:"breakpoints,omitempty"`
	NextWaitToken *string      `json:"nextWaitToken,omitempty"`
}
