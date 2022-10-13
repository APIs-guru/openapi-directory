package shared

type GoogleCloudConnectorsV1ConfigVariable struct {
	BoolValue   *bool                          `json:"boolValue"`
	IntValue    *string                        `json:"intValue"`
	Key         *string                        `json:"key"`
	SecretValue *GoogleCloudConnectorsV1Secret `json:"secretValue"`
	StringValue *string                        `json:"stringValue"`
}
