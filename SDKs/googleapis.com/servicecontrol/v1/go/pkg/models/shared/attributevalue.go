package shared

// AttributeValue
// The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
type AttributeValue struct {
	BoolValue   *bool              `json:"boolValue,omitempty"`
	IntValue    *string            `json:"intValue,omitempty"`
	StringValue *TruncatableString `json:"stringValue,omitempty"`
}
