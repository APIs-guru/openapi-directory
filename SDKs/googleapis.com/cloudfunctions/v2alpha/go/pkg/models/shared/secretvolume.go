package shared

// SecretVolume
// Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.
type SecretVolume struct {
	MountPath *string         `json:"mountPath,omitempty"`
	ProjectID *string         `json:"projectId,omitempty"`
	Secret    *string         `json:"secret,omitempty"`
	Versions  []SecretVersion `json:"versions,omitempty"`
}
