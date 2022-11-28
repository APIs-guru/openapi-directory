package shared

// GoogleCloudRunV2VolumeMount
// VolumeMount describes a mounting of a Volume within a container.
type GoogleCloudRunV2VolumeMount struct {
	MountPath *string `json:"mountPath,omitempty"`
	Name      *string `json:"name,omitempty"`
}
