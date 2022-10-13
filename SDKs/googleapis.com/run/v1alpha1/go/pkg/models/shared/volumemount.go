package shared

type VolumeMount struct {
	MountPath *string `json:"mountPath"`
	Name      *string `json:"name"`
	ReadOnly  *bool   `json:"readOnly"`
	SubPath   *string `json:"subPath"`
}
