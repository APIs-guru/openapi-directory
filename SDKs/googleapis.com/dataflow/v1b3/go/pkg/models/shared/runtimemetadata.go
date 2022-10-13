package shared

type RuntimeMetadata struct {
	Parameters []ParameterMetadata `json:"parameters"`
	SdkInfo    *SdkInfo            `json:"sdkInfo"`
}
