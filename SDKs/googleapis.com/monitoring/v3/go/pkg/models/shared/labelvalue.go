package shared

// LabelValue
// A label value.
type LabelValue struct {
	BoolValue   *bool   `json:"boolValue,omitempty"`
	Int64Value  *string `json:"int64Value,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}
