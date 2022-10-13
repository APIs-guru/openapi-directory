package shared

type InconclusiveDetail struct {
	AbortedByUser         *bool `json:"abortedByUser"`
	HasErrorLogs          *bool `json:"hasErrorLogs"`
	InfrastructureFailure *bool `json:"infrastructureFailure"`
}
