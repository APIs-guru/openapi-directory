package shared

type ListBreakpointsResponse struct {
	Breakpoints   []Breakpoint `json:"breakpoints"`
	NextWaitToken *string      `json:"nextWaitToken"`
}
