package shared

type GoogleCloudDataplexV1EnvironmentSessionSpec struct {
	EnableFastStartup *bool   `json:"enableFastStartup"`
	MaxIdleDuration   *string `json:"maxIdleDuration"`
}
