package shared

// Error
// Error describes why the execution was abnormally terminated.
type Error struct {
	Context    *string     `json:"context,omitempty"`
	Payload    *string     `json:"payload,omitempty"`
	StackTrace *StackTrace `json:"stackTrace,omitempty"`
}
