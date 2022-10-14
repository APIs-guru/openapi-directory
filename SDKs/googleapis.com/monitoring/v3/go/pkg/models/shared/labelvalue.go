package shared

type LabelValue struct {
	BoolValue   *bool   `json:"boolValue,omitempty"`
	Int64Value  *string `json:"int64Value,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}
