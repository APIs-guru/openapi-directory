package shared

type UpdateActiveBreakpointRequest struct {
	Breakpoint *Breakpoint `json:"breakpoint,omitempty"`
}
