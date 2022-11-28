package shared

// SecretEnvVar
// Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.
type SecretEnvVar struct {
	Key       *string `json:"key,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Secret    *string `json:"secret,omitempty"`
	Version   *string `json:"version,omitempty"`
}
