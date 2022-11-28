package shared

// InconclusiveDetail
// Details for an outcome with an INCONCLUSIVE outcome summary.
type InconclusiveDetail struct {
	AbortedByUser         *bool `json:"abortedByUser,omitempty"`
	HasErrorLogs          *bool `json:"hasErrorLogs,omitempty"`
	InfrastructureFailure *bool `json:"infrastructureFailure,omitempty"`
}
