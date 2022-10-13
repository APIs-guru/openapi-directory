package shared

type GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata struct {
	BuildFinishedOn   *string                                         `json:"buildFinishedOn"`
	BuildInvocationID *string                                         `json:"buildInvocationId"`
	BuildStartedOn    *string                                         `json:"buildStartedOn"`
	Completeness      *GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness `json:"completeness"`
	Reproducible      *bool                                           `json:"reproducible"`
}
