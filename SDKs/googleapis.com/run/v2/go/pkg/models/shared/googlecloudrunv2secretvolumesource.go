package shared



type GoogleCloudRunV2SecretVolumeSource struct {
    DefaultMode *int32 `json:"defaultMode,omitempty"`
    Items []GoogleCloudRunV2VersionToPath `json:"items,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

