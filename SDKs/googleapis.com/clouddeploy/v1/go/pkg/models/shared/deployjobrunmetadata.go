package shared

// DeployJobRunMetadata
// DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
type DeployJobRunMetadata struct {
	CloudRun *CloudRunMetadata `json:"cloudRun,omitempty"`
}
