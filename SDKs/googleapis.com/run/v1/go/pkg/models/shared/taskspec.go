package shared

type TaskSpec struct {
	Containers         []Container `json:"containers"`
	MaxRetries         *int32      `json:"maxRetries"`
	ServiceAccountName *string     `json:"serviceAccountName"`
	TimeoutSeconds     *string     `json:"timeoutSeconds"`
	Volumes            []Volume    `json:"volumes"`
}
