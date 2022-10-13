package shared

type DeployJobRunFailureCauseEnum string

const (
	DeployJobRunFailureCauseEnumFailureCauseUnspecified DeployJobRunFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	DeployJobRunFailureCauseEnumCloudBuildUnavailable   DeployJobRunFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	DeployJobRunFailureCauseEnumExecutionFailed         DeployJobRunFailureCauseEnum = "EXECUTION_FAILED"
	DeployJobRunFailureCauseEnumDeadlineExceeded        DeployJobRunFailureCauseEnum = "DEADLINE_EXCEEDED"
)

type DeployJobRun struct {
	Build          *string                       `json:"build"`
	FailureCause   *DeployJobRunFailureCauseEnum `json:"failureCause"`
	FailureMessage *string                       `json:"failureMessage"`
	Metadata       *DeployJobRunMetadata         `json:"metadata"`
}
