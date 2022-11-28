package shared

// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource
// Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
type GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource struct {
	Digest     map[string]string `json:"digest,omitempty"`
	EntryPoint *string           `json:"entryPoint,omitempty"`
	URI        *string           `json:"uri,omitempty"`
}
