package shared

type GoogleCloudDataplexV1EnvironmentSessionSpec struct {
	EnableFastStartup *bool   `json:"enableFastStartup,omitempty"`
	MaxIdleDuration   *string `json:"maxIdleDuration,omitempty"`
}
