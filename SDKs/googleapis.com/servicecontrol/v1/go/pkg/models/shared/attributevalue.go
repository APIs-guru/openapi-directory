package shared

type AttributeValue struct {
	BoolValue   *bool              `json:"boolValue,omitempty"`
	IntValue    *string            `json:"intValue,omitempty"`
	StringValue *TruncatableString `json:"stringValue,omitempty"`
}
