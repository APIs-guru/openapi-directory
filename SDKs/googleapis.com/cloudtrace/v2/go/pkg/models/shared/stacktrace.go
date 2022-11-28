package shared

// StackTrace
// A call stack appearing in a trace.
type StackTrace struct {
	StackFrames      *StackFrames `json:"stackFrames,omitempty"`
	StackTraceHashID *string      `json:"stackTraceHashId,omitempty"`
}
