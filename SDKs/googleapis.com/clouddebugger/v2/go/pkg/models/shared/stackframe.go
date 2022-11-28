package shared

// StackFrame
// Represents a stack frame context.
type StackFrame struct {
	Arguments []Variable      `json:"arguments,omitempty"`
	Function  *string         `json:"function,omitempty"`
	Locals    []Variable      `json:"locals,omitempty"`
	Location  *SourceLocation `json:"location,omitempty"`
}
