package shared

// RuntimeMetadata
// RuntimeMetadata describing a runtime environment.
type RuntimeMetadata struct {
	Parameters []ParameterMetadata `json:"parameters,omitempty"`
	SdkInfo    *SDKInfo            `json:"sdkInfo,omitempty"`
}
