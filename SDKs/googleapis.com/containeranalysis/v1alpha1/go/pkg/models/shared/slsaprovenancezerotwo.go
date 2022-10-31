package shared

type SlsaProvenanceZeroTwo struct {
	BuildConfig map[string]interface{}                                                      `json:"buildConfig,omitempty"`
	BuildType   *string                                                                     `json:"buildType,omitempty"`
	Builder     *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder    `json:"builder,omitempty"`
	Invocation  *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation `json:"invocation,omitempty"`
	Materials   []GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial  `json:"materials,omitempty"`
	Metadata    *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata   `json:"metadata,omitempty"`
}
