package shared

// Option
// A protocol buffer option, which can be attached to a message, field, enumeration, etc.
type Option struct {
	Name  *string                `json:"name,omitempty"`
	Value map[string]interface{} `json:"value,omitempty"`
}
