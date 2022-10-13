package shared

type PatchJobInstanceDetailsSummary struct {
	AckedInstanceCount                   *string `json:"ackedInstanceCount"`
	ApplyingPatchesInstanceCount         *string `json:"applyingPatchesInstanceCount"`
	DownloadingPatchesInstanceCount      *string `json:"downloadingPatchesInstanceCount"`
	FailedInstanceCount                  *string `json:"failedInstanceCount"`
	InactiveInstanceCount                *string `json:"inactiveInstanceCount"`
	NoAgentDetectedInstanceCount         *string `json:"noAgentDetectedInstanceCount"`
	NotifiedInstanceCount                *string `json:"notifiedInstanceCount"`
	PendingInstanceCount                 *string `json:"pendingInstanceCount"`
	PostPatchStepInstanceCount           *string `json:"postPatchStepInstanceCount"`
	PrePatchStepInstanceCount            *string `json:"prePatchStepInstanceCount"`
	RebootingInstanceCount               *string `json:"rebootingInstanceCount"`
	StartedInstanceCount                 *string `json:"startedInstanceCount"`
	SucceededInstanceCount               *string `json:"succeededInstanceCount"`
	SucceededRebootRequiredInstanceCount *string `json:"succeededRebootRequiredInstanceCount"`
	TimedOutInstanceCount                *string `json:"timedOutInstanceCount"`
}
