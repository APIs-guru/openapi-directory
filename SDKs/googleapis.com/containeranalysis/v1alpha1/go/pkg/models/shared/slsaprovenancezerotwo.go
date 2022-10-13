package shared

type SlsaProvenanceZeroTwo struct {
	BuildConfig map[string]interface{}                                                      `json:"buildConfig"`
	BuildType   *string                                                                     `json:"buildType"`
	Builder     *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder    `json:"builder"`
	Invocation  *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation `json:"invocation"`
	Materials   []GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial  `json:"materials"`
	Metadata    *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata   `json:"metadata"`
}
