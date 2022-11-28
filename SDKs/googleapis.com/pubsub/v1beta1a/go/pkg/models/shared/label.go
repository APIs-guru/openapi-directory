package shared

// Label
// A key-value pair applied to a given object.
type Label struct {
	Key      *string `json:"key,omitempty"`
	NumValue *string `json:"numValue,omitempty"`
	StrValue *string `json:"strValue,omitempty"`
}
