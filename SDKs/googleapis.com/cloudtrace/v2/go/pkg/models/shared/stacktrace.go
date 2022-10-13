package shared

type StackTrace struct {
	StackFrames      *StackFrames `json:"stackFrames"`
	StackTraceHashID *string      `json:"stackTraceHashId"`
}
