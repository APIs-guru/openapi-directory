package shared

// Header
// Defines a header message. A header can have a key and a value.
type Header struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
