package shared

// DeploymentJobs
// Deployment job composition.
type DeploymentJobs struct {
	DeployJob *Job `json:"deployJob,omitempty"`
	VerifyJob *Job `json:"verifyJob,omitempty"`
}
