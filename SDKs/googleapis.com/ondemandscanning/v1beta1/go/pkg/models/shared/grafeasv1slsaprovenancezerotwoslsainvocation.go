package shared

type GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation struct {
	ConfigSource *GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource `json:"configSource,omitempty"`
	Environment  map[string]interface{}                          `json:"environment,omitempty"`
	Parameters   map[string]interface{}                          `json:"parameters,omitempty"`
}
