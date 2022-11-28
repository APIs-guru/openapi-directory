package shared

// Metadata
// Metadata includes information associated with a `Rollout`.
type Metadata struct {
	CloudRun *CloudRunMetadata `json:"cloudRun,omitempty"`
}
