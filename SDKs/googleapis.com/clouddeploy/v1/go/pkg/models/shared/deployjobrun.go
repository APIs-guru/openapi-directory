package shared

type DeployJobRunFailureCauseEnum string

const (
	DeployJobRunFailureCauseEnumFailureCauseUnspecified DeployJobRunFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	DeployJobRunFailureCauseEnumCloudBuildUnavailable   DeployJobRunFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	DeployJobRunFailureCauseEnumExecutionFailed         DeployJobRunFailureCauseEnum = "EXECUTION_FAILED"
	DeployJobRunFailureCauseEnumDeadlineExceeded        DeployJobRunFailureCauseEnum = "DEADLINE_EXCEEDED"
)

// DeployJobRun
// DeployJobRun contains information specific to a deploy `JobRun`.
type DeployJobRun struct {
	Build          *string                       `json:"build,omitempty"`
	FailureCause   *DeployJobRunFailureCauseEnum `json:"failureCause,omitempty"`
	FailureMessage *string                       `json:"failureMessage,omitempty"`
	Metadata       *DeployJobRunMetadata         `json:"metadata,omitempty"`
}
