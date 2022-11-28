package shared

// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation
// Identifies the event that kicked off the build.
type GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation struct {
	ConfigSource *GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource `json:"configSource,omitempty"`
	Environment  map[string]interface{}                                                        `json:"environment,omitempty"`
	Parameters   map[string]interface{}                                                        `json:"parameters,omitempty"`
}
