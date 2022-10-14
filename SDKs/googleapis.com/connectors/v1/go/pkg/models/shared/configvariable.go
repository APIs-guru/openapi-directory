package shared

type ConfigVariable struct {
	BoolValue   *bool   `json:"boolValue,omitempty"`
	IntValue    *string `json:"intValue,omitempty"`
	Key         *string `json:"key,omitempty"`
	SecretValue *Secret `json:"secretValue,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}
