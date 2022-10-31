package shared

type RuntimeMetadata struct {
	Parameters []ParameterMetadata `json:"parameters,omitempty"`
	SdkInfo    *SdkInfo            `json:"sdkInfo,omitempty"`
}
