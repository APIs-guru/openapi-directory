package shared

// ConfigMapVolumeSource
// Not supported by Cloud Run Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
type ConfigMapVolumeSource struct {
	DefaultMode *int32      `json:"defaultMode,omitempty"`
	Items       []KeyToPath `json:"items,omitempty"`
	Name        *string     `json:"name,omitempty"`
	Optional    *bool       `json:"optional,omitempty"`
}
