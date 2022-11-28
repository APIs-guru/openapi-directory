package shared

// StackTrace
// A collection of stack elements (frames) where an error occurred.
type StackTrace struct {
	Elements []StackTraceElement `json:"elements,omitempty"`
}
