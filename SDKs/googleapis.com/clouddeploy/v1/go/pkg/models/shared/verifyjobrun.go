package shared

type VerifyJobRunFailureCauseEnum string

const (
	VerifyJobRunFailureCauseEnumFailureCauseUnspecified    VerifyJobRunFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	VerifyJobRunFailureCauseEnumCloudBuildUnavailable      VerifyJobRunFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	VerifyJobRunFailureCauseEnumExecutionFailed            VerifyJobRunFailureCauseEnum = "EXECUTION_FAILED"
	VerifyJobRunFailureCauseEnumDeadlineExceeded           VerifyJobRunFailureCauseEnum = "DEADLINE_EXCEEDED"
	VerifyJobRunFailureCauseEnumVerificationConfigNotFound VerifyJobRunFailureCauseEnum = "VERIFICATION_CONFIG_NOT_FOUND"
)

// VerifyJobRun
// VerifyJobRun contains information specific to a verify `JobRun`.
type VerifyJobRun struct {
	ArtifactURI    *string                       `json:"artifactUri,omitempty"`
	Build          *string                       `json:"build,omitempty"`
	EventLogPath   *string                       `json:"eventLogPath,omitempty"`
	FailureCause   *VerifyJobRunFailureCauseEnum `json:"failureCause,omitempty"`
	FailureMessage *string                       `json:"failureMessage,omitempty"`
}
