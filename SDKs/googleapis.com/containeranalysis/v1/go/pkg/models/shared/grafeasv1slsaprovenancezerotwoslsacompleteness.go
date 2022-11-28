package shared

// GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness
// Indicates that the builder claims certain fields in this message to be complete.
type GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness struct {
	Environment *bool `json:"environment,omitempty"`
	Materials   *bool `json:"materials,omitempty"`
	Parameters  *bool `json:"parameters,omitempty"`
}
