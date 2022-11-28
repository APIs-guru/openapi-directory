package shared

// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata
// Other properties of the build.
type GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata struct {
	BuildFinishedOn   *string                                                                       `json:"buildFinishedOn,omitempty"`
	BuildInvocationID *string                                                                       `json:"buildInvocationId,omitempty"`
	BuildStartedOn    *string                                                                       `json:"buildStartedOn,omitempty"`
	Completeness      *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness `json:"completeness,omitempty"`
	Reproducible      *bool                                                                         `json:"reproducible,omitempty"`
}
