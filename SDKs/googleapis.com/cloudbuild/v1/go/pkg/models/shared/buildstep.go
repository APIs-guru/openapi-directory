package shared




type BuildStepStatusEnum string

const (
    BuildStepStatusEnumStatusUnknown BuildStepStatusEnum = "STATUS_UNKNOWN"
BuildStepStatusEnumPending BuildStepStatusEnum = "PENDING"
BuildStepStatusEnumQueued BuildStepStatusEnum = "QUEUED"
BuildStepStatusEnumWorking BuildStepStatusEnum = "WORKING"
BuildStepStatusEnumSuccess BuildStepStatusEnum = "SUCCESS"
BuildStepStatusEnumFailure BuildStepStatusEnum = "FAILURE"
BuildStepStatusEnumInternalError BuildStepStatusEnum = "INTERNAL_ERROR"
BuildStepStatusEnumTimeout BuildStepStatusEnum = "TIMEOUT"
BuildStepStatusEnumCancelled BuildStepStatusEnum = "CANCELLED"
BuildStepStatusEnumExpired BuildStepStatusEnum = "EXPIRED"
)


type BuildStep struct {
    AllowExitCodes []int32 `json:"allowExitCodes,omitempty"`
    AllowFailure *bool `json:"allowFailure,omitempty"`
    Args []string `json:"args,omitempty"`
    Dir *string `json:"dir,omitempty"`
    Entrypoint *string `json:"entrypoint,omitempty"`
    Env []string `json:"env,omitempty"`
    ExitCode *int32 `json:"exitCode,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    PullTiming *TimeSpan `json:"pullTiming,omitempty"`
    Script *string `json:"script,omitempty"`
    SecretEnv []string `json:"secretEnv,omitempty"`
    Status *BuildStepStatusEnum `json:"status,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    Timing *TimeSpan `json:"timing,omitempty"`
    Volumes []Volume `json:"volumes,omitempty"`
    WaitFor []string `json:"waitFor,omitempty"`
    
}

