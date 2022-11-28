package shared

// GoogleCloudConnectorsV1ConfigVariable
// ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
type GoogleCloudConnectorsV1ConfigVariable struct {
	BoolValue   *bool                          `json:"boolValue,omitempty"`
	IntValue    *string                        `json:"intValue,omitempty"`
	Key         *string                        `json:"key,omitempty"`
	SecretValue *GoogleCloudConnectorsV1Secret `json:"secretValue,omitempty"`
	StringValue *string                        `json:"stringValue,omitempty"`
}
