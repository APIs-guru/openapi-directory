package shared

type InstanceStatus struct {
	CompletionTime    *string                `json:"completionTime,omitempty"`
	Failed            *int32                 `json:"failed,omitempty"`
	Index             *int32                 `json:"index,omitempty"`
	LastAttemptResult *InstanceAttemptResult `json:"lastAttemptResult,omitempty"`
	LastExitCode      *int32                 `json:"lastExitCode,omitempty"`
	Restarted         *int32                 `json:"restarted,omitempty"`
	StartTime         *string                `json:"startTime,omitempty"`
	Succeeded         *int32                 `json:"succeeded,omitempty"`
}
