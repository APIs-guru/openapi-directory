package shared

type SecretVolumeSource struct {
	DefaultMode *int32      `json:"defaultMode,omitempty"`
	Items       []KeyToPath `json:"items,omitempty"`
	Optional    *bool       `json:"optional,omitempty"`
	SecretName  *string     `json:"secretName,omitempty"`
}
