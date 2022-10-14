package shared

type StackFrames struct {
	DroppedFramesCount *int32       `json:"droppedFramesCount,omitempty"`
	Frame              []StackFrame `json:"frame,omitempty"`
}
