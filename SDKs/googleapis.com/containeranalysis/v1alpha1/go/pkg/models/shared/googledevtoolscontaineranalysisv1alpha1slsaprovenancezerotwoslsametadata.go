package shared

type GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata struct {
	BuildFinishedOn   *string                                                                       `json:"buildFinishedOn"`
	BuildInvocationID *string                                                                       `json:"buildInvocationId"`
	BuildStartedOn    *string                                                                       `json:"buildStartedOn"`
	Completeness      *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness `json:"completeness"`
	Reproducible      *bool                                                                         `json:"reproducible"`
}
