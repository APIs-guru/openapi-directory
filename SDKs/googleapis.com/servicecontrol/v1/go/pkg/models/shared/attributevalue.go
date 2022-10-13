package shared

type AttributeValue struct {
	BoolValue   *bool              `json:"boolValue"`
	IntValue    *string            `json:"intValue"`
	StringValue *TruncatableString `json:"stringValue"`
}
