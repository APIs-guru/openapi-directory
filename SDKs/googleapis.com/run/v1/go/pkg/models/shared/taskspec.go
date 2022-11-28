package shared

// TaskSpec
// TaskSpec is a description of a task.
type TaskSpec struct {
	Containers         []Container `json:"containers,omitempty"`
	MaxRetries         *int32      `json:"maxRetries,omitempty"`
	ServiceAccountName *string     `json:"serviceAccountName,omitempty"`
	TimeoutSeconds     *string     `json:"timeoutSeconds,omitempty"`
	Volumes            []Volume    `json:"volumes,omitempty"`
}
