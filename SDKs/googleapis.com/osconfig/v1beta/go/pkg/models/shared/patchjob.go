package shared

type PatchJobStateEnum string

const (
	PatchJobStateEnumStateUnspecified    PatchJobStateEnum = "STATE_UNSPECIFIED"
	PatchJobStateEnumStarted             PatchJobStateEnum = "STARTED"
	PatchJobStateEnumInstanceLookup      PatchJobStateEnum = "INSTANCE_LOOKUP"
	PatchJobStateEnumPatching            PatchJobStateEnum = "PATCHING"
	PatchJobStateEnumSucceeded           PatchJobStateEnum = "SUCCEEDED"
	PatchJobStateEnumCompletedWithErrors PatchJobStateEnum = "COMPLETED_WITH_ERRORS"
	PatchJobStateEnumCanceled            PatchJobStateEnum = "CANCELED"
	PatchJobStateEnumTimedOut            PatchJobStateEnum = "TIMED_OUT"
)

type PatchJob struct {
	CreateTime             *string                         `json:"createTime"`
	Description            *string                         `json:"description"`
	DisplayName            *string                         `json:"displayName"`
	DryRun                 *bool                           `json:"dryRun"`
	Duration               *string                         `json:"duration"`
	ErrorMessage           *string                         `json:"errorMessage"`
	InstanceDetailsSummary *PatchJobInstanceDetailsSummary `json:"instanceDetailsSummary"`
	InstanceFilter         *PatchInstanceFilter            `json:"instanceFilter"`
	Name                   *string                         `json:"name"`
	PatchConfig            *PatchConfig                    `json:"patchConfig"`
	PatchDeployment        *string                         `json:"patchDeployment"`
	PercentComplete        *float64                        `json:"percentComplete"`
	Rollout                *PatchRollout                   `json:"rollout"`
	State                  *PatchJobStateEnum              `json:"state"`
	UpdateTime             *string                         `json:"updateTime"`
}
