package shared

type StackTrace struct {
	StackFrames      *StackFrames `json:"stackFrames,omitempty"`
	StackTraceHashID *string      `json:"stackTraceHashId,omitempty"`
}
