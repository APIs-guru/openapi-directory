package shared



type DeploymentJobs struct {
    DeployJob *Job `json:"deployJob,omitempty"`
    VerifyJob *Job `json:"verifyJob,omitempty"`
    
}

