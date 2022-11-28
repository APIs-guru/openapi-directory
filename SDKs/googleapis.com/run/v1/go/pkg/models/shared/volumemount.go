package shared

// VolumeMount
// VolumeMount describes a mounting of a Volume within a container.
type VolumeMount struct {
	MountPath *string `json:"mountPath,omitempty"`
	Name      *string `json:"name,omitempty"`
	ReadOnly  *bool   `json:"readOnly,omitempty"`
	SubPath   *string `json:"subPath,omitempty"`
}
