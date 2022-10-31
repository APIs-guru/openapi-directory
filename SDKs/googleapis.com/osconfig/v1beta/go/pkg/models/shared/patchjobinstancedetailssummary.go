package shared

type PatchJobInstanceDetailsSummary struct {
	AckedInstanceCount                   *string `json:"ackedInstanceCount,omitempty"`
	ApplyingPatchesInstanceCount         *string `json:"applyingPatchesInstanceCount,omitempty"`
	DownloadingPatchesInstanceCount      *string `json:"downloadingPatchesInstanceCount,omitempty"`
	FailedInstanceCount                  *string `json:"failedInstanceCount,omitempty"`
	InactiveInstanceCount                *string `json:"inactiveInstanceCount,omitempty"`
	NoAgentDetectedInstanceCount         *string `json:"noAgentDetectedInstanceCount,omitempty"`
	NotifiedInstanceCount                *string `json:"notifiedInstanceCount,omitempty"`
	PendingInstanceCount                 *string `json:"pendingInstanceCount,omitempty"`
	PostPatchStepInstanceCount           *string `json:"postPatchStepInstanceCount,omitempty"`
	PrePatchStepInstanceCount            *string `json:"prePatchStepInstanceCount,omitempty"`
	RebootingInstanceCount               *string `json:"rebootingInstanceCount,omitempty"`
	StartedInstanceCount                 *string `json:"startedInstanceCount,omitempty"`
	SucceededInstanceCount               *string `json:"succeededInstanceCount,omitempty"`
	SucceededRebootRequiredInstanceCount *string `json:"succeededRebootRequiredInstanceCount,omitempty"`
	TimedOutInstanceCount                *string `json:"timedOutInstanceCount,omitempty"`
}
