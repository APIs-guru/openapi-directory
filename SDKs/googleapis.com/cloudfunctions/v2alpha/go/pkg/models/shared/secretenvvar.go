package shared

type SecretEnvVar struct {
	Key       *string `json:"key"`
	ProjectID *string `json:"projectId"`
	Secret    *string `json:"secret"`
	Version   *string `json:"version"`
}
