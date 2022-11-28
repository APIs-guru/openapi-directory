package shared

// GoogleCloudRunV2VersionToPath
// VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.
type GoogleCloudRunV2VersionToPath struct {
	Mode    *int32  `json:"mode,omitempty"`
	Path    *string `json:"path,omitempty"`
	Version *string `json:"version,omitempty"`
}
