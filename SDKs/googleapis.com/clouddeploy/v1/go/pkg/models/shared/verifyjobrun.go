package shared

type VerifyJobRunFailureCauseEnum string

const (
	VerifyJobRunFailureCauseEnumFailureCauseUnspecified    VerifyJobRunFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	VerifyJobRunFailureCauseEnumCloudBuildUnavailable      VerifyJobRunFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	VerifyJobRunFailureCauseEnumExecutionFailed            VerifyJobRunFailureCauseEnum = "EXECUTION_FAILED"
	VerifyJobRunFailureCauseEnumDeadlineExceeded           VerifyJobRunFailureCauseEnum = "DEADLINE_EXCEEDED"
	VerifyJobRunFailureCauseEnumVerificationConfigNotFound VerifyJobRunFailureCauseEnum = "VERIFICATION_CONFIG_NOT_FOUND"
)

type VerifyJobRun struct {
	ArtifactURI    *string                       `json:"artifactUri"`
	Build          *string                       `json:"build"`
	EventLogPath   *string                       `json:"eventLogPath"`
	FailureCause   *VerifyJobRunFailureCauseEnum `json:"failureCause"`
	FailureMessage *string                       `json:"failureMessage"`
}
