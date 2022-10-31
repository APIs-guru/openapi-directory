package shared

type InconclusiveDetail struct {
	AbortedByUser         *bool `json:"abortedByUser,omitempty"`
	HasErrorLogs          *bool `json:"hasErrorLogs,omitempty"`
	InfrastructureFailure *bool `json:"infrastructureFailure,omitempty"`
}
