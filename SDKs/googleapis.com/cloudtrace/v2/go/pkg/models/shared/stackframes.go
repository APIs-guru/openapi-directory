package shared

type StackFrames struct {
	DroppedFramesCount *int32       `json:"droppedFramesCount"`
	Frame              []StackFrame `json:"frame"`
}
