package shared

type ConfigMapVolumeSource struct {
	DefaultMode *int32      `json:"defaultMode"`
	Items       []KeyToPath `json:"items"`
	Name        *string     `json:"name"`
	Optional    *bool       `json:"optional"`
}
