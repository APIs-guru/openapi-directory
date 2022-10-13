package shared

type DeploymentJobs struct {
	DeployJob *Job `json:"deployJob"`
	VerifyJob *Job `json:"verifyJob"`
}
