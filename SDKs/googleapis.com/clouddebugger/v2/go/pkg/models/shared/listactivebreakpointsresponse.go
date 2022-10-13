package shared

type ListActiveBreakpointsResponse struct {
	Breakpoints   []Breakpoint `json:"breakpoints"`
	NextWaitToken *string      `json:"nextWaitToken"`
	WaitExpired   *bool        `json:"waitExpired"`
}
