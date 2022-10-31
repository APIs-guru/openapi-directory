package shared



type GoogleCloudConnectorsV1ConfigVariable struct {
    BoolValue *bool `json:"boolValue,omitempty"`
    IntValue *string `json:"intValue,omitempty"`
    Key *string `json:"key,omitempty"`
    SecretValue *GoogleCloudConnectorsV1Secret `json:"secretValue,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

