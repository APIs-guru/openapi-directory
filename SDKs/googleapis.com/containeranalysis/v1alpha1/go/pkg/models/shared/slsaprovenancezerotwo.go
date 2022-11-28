package shared

// SlsaProvenanceZeroTwo
// SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.
type SlsaProvenanceZeroTwo struct {
	BuildConfig map[string]interface{}                                                      `json:"buildConfig,omitempty"`
	BuildType   *string                                                                     `json:"buildType,omitempty"`
	Builder     *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder    `json:"builder,omitempty"`
	Invocation  *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation `json:"invocation,omitempty"`
	Materials   []GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial  `json:"materials,omitempty"`
	Metadata    *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata   `json:"metadata,omitempty"`
}
