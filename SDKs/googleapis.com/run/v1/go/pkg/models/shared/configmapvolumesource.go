package shared



type ConfigMapVolumeSource struct {
    DefaultMode *int32 `json:"defaultMode,omitempty"`
    Items []KeyToPath `json:"items,omitempty"`
    Name *string `json:"name,omitempty"`
    Optional *bool `json:"optional,omitempty"`
    
}

