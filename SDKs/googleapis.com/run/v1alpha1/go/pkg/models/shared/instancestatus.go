package shared

type InstanceStatus struct {
	CompletionTime    *string                `json:"completionTime"`
	Failed            *int32                 `json:"failed"`
	Index             *int32                 `json:"index"`
	LastAttemptResult *InstanceAttemptResult `json:"lastAttemptResult"`
	LastExitCode      *int32                 `json:"lastExitCode"`
	Restarted         *int32                 `json:"restarted"`
	StartTime         *string                `json:"startTime"`
	Succeeded         *int32                 `json:"succeeded"`
}
