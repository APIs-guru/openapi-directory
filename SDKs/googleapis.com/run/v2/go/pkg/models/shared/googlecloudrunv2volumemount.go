package shared

type GoogleCloudRunV2VolumeMount struct {
	MountPath *string `json:"mountPath"`
	Name      *string `json:"name"`
}
