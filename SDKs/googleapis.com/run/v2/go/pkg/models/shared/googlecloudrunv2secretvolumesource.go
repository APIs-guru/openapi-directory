package shared

// GoogleCloudRunV2SecretVolumeSource
// The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
type GoogleCloudRunV2SecretVolumeSource struct {
	DefaultMode *int32                          `json:"defaultMode,omitempty"`
	Items       []GoogleCloudRunV2VersionToPath `json:"items,omitempty"`
	Secret      *string                         `json:"secret,omitempty"`
}
