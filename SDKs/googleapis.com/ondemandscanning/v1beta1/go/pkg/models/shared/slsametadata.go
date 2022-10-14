package shared

type SlsaMetadata struct {
	BuildFinishedOn   *string           `json:"buildFinishedOn,omitempty"`
	BuildInvocationID *string           `json:"buildInvocationId,omitempty"`
	BuildStartedOn    *string           `json:"buildStartedOn,omitempty"`
	Completeness      *SlsaCompleteness `json:"completeness,omitempty"`
	Reproducible      *bool             `json:"reproducible,omitempty"`
}
