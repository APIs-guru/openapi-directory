package shared

type GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata struct {
	BuildFinishedOn   *string                                         `json:"buildFinishedOn,omitempty"`
	BuildInvocationID *string                                         `json:"buildInvocationId,omitempty"`
	BuildStartedOn    *string                                         `json:"buildStartedOn,omitempty"`
	Completeness      *GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness `json:"completeness,omitempty"`
	Reproducible      *bool                                           `json:"reproducible,omitempty"`
}
