package shared

// Parameter
// Structured data associated with this message.
type Parameter struct {
	Key   *string      `json:"key,omitempty"`
	Value *interface{} `json:"value,omitempty"`
}
