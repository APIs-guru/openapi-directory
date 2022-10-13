package shared

type SlsaProvenanceZeroTwo struct {
	BuildConfig map[string]interface{}                        `json:"buildConfig"`
	BuildType   *string                                       `json:"buildType"`
	Builder     *GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder    `json:"builder"`
	Invocation  *GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation `json:"invocation"`
	Materials   []GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial  `json:"materials"`
	Metadata    *GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata   `json:"metadata"`
}
