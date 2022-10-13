package shared

type SecretVolume struct {
	MountPath *string         `json:"mountPath"`
	ProjectID *string         `json:"projectId"`
	Secret    *string         `json:"secret"`
	Versions  []SecretVersion `json:"versions"`
}
