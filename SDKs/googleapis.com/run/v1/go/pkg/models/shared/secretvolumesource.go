package shared

type SecretVolumeSource struct {
	DefaultMode *int32      `json:"defaultMode"`
	Items       []KeyToPath `json:"items"`
	Optional    *bool       `json:"optional"`
	SecretName  *string     `json:"secretName"`
}
