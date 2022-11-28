package shared

// StackFrames
// A collection of stack frames, which can be truncated.
type StackFrames struct {
	DroppedFramesCount *int32       `json:"droppedFramesCount,omitempty"`
	Frame              []StackFrame `json:"frame,omitempty"`
}
