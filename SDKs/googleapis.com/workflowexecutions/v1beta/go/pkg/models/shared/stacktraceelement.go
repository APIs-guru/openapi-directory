package shared

// StackTraceElement
// A single stack element (frame) where an error occurred.
type StackTraceElement struct {
	Position *Position `json:"position,omitempty"`
	Routine  *string   `json:"routine,omitempty"`
	Step     *string   `json:"step,omitempty"`
}
