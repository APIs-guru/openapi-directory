package shared

type GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation struct {
	ConfigSource *GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource `json:"configSource"`
	Environment  map[string]interface{}                          `json:"environment"`
	Parameters   map[string]interface{}                          `json:"parameters"`
}
