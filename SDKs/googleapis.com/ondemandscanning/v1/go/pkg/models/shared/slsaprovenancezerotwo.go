package shared

type SlsaProvenanceZeroTwo struct {
	BuildConfig map[string]interface{}                        `json:"buildConfig,omitempty"`
	BuildType   *string                                       `json:"buildType,omitempty"`
	Builder     *GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder    `json:"builder,omitempty"`
	Invocation  *GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation `json:"invocation,omitempty"`
	Materials   []GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial  `json:"materials,omitempty"`
	Metadata    *GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata   `json:"metadata,omitempty"`
}
