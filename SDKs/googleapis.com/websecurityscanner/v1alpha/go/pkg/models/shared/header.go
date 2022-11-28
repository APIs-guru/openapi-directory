package shared

// Header
// Describes a HTTP Header.
type Header struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
