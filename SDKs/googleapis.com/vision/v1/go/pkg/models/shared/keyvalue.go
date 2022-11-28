package shared

// KeyValue
// A product label represented as a key-value pair.
type KeyValue struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
