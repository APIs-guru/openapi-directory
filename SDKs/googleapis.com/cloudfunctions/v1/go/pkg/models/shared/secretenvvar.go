package shared

type SecretEnvVar struct {
	Key       *string `json:"key,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Secret    *string `json:"secret,omitempty"`
	Version   *string `json:"version,omitempty"`
}
