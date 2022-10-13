package shared

type GoogleCloudRunV2SecretVolumeSource struct {
	DefaultMode *int32                          `json:"defaultMode"`
	Items       []GoogleCloudRunV2VersionToPath `json:"items"`
	Secret      *string                         `json:"secret"`
}
