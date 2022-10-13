package shared

type GoogleCloudDataplexV1TaskExecutionSpec struct {
	Args                    map[string]string `json:"args"`
	KmsKey                  *string           `json:"kmsKey"`
	MaxJobExecutionLifetime *string           `json:"maxJobExecutionLifetime"`
	Project                 *string           `json:"project"`
	ServiceAccount          *string           `json:"serviceAccount"`
}
