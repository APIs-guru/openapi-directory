package shared

type SlsaMetadata struct {
	BuildFinishedOn   *string           `json:"buildFinishedOn"`
	BuildInvocationID *string           `json:"buildInvocationId"`
	BuildStartedOn    *string           `json:"buildStartedOn"`
	Completeness      *SlsaCompleteness `json:"completeness"`
	Reproducible      *bool             `json:"reproducible"`
}
