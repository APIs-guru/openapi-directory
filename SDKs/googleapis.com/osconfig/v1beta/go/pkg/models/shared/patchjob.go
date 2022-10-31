package shared




type PatchJobStateEnum string

const (
    PatchJobStateEnumStateUnspecified PatchJobStateEnum = "STATE_UNSPECIFIED"
PatchJobStateEnumStarted PatchJobStateEnum = "STARTED"
PatchJobStateEnumInstanceLookup PatchJobStateEnum = "INSTANCE_LOOKUP"
PatchJobStateEnumPatching PatchJobStateEnum = "PATCHING"
PatchJobStateEnumSucceeded PatchJobStateEnum = "SUCCEEDED"
PatchJobStateEnumCompletedWithErrors PatchJobStateEnum = "COMPLETED_WITH_ERRORS"
PatchJobStateEnumCanceled PatchJobStateEnum = "CANCELED"
PatchJobStateEnumTimedOut PatchJobStateEnum = "TIMED_OUT"
)


type PatchJob struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    DryRun *bool `json:"dryRun,omitempty"`
    Duration *string `json:"duration,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    InstanceDetailsSummary *PatchJobInstanceDetailsSummary `json:"instanceDetailsSummary,omitempty"`
    InstanceFilter *PatchInstanceFilter `json:"instanceFilter,omitempty"`
    Name *string `json:"name,omitempty"`
    PatchConfig *PatchConfig `json:"patchConfig,omitempty"`
    PatchDeployment *string `json:"patchDeployment,omitempty"`
    PercentComplete *float64 `json:"percentComplete,omitempty"`
    Rollout *PatchRollout `json:"rollout,omitempty"`
    State *PatchJobStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

