package shared

// CustomField
// Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
type CustomField struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
