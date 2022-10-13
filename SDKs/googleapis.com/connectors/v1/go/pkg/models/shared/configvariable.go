package shared

type ConfigVariable struct {
	BoolValue   *bool   `json:"boolValue"`
	IntValue    *string `json:"intValue"`
	Key         *string `json:"key"`
	SecretValue *Secret `json:"secretValue"`
	StringValue *string `json:"stringValue"`
}
