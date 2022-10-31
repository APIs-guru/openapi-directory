package shared

type TaskSpec struct {
	Containers         []Container `json:"containers,omitempty"`
	MaxRetries         *int32      `json:"maxRetries,omitempty"`
	ServiceAccountName *string     `json:"serviceAccountName,omitempty"`
	TimeoutSeconds     *string     `json:"timeoutSeconds,omitempty"`
	Volumes            []Volume    `json:"volumes,omitempty"`
}
