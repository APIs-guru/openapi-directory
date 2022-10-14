package shared

type SecretVolume struct {
	MountPath *string         `json:"mountPath,omitempty"`
	ProjectID *string         `json:"projectId,omitempty"`
	Secret    *string         `json:"secret,omitempty"`
	Versions  []SecretVersion `json:"versions,omitempty"`
}
