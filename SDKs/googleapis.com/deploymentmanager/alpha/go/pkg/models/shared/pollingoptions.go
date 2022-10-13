package shared

type PollingOptions struct {
	Diagnostics     []Diagnostic `json:"diagnostics"`
	FailCondition   *string      `json:"failCondition"`
	FinishCondition *string      `json:"finishCondition"`
	PollingLink     *string      `json:"pollingLink"`
	TargetLink      *string      `json:"targetLink"`
}
