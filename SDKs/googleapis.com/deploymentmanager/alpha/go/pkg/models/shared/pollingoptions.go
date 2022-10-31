package shared

type PollingOptions struct {
	Diagnostics     []Diagnostic `json:"diagnostics,omitempty"`
	FailCondition   *string      `json:"failCondition,omitempty"`
	FinishCondition *string      `json:"finishCondition,omitempty"`
	PollingLink     *string      `json:"pollingLink,omitempty"`
	TargetLink      *string      `json:"targetLink,omitempty"`
}
