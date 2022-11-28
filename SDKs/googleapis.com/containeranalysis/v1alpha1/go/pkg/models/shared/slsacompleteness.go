package shared

// SlsaCompleteness
// Indicates that the builder claims certain fields in this message to be complete.
type SlsaCompleteness struct {
	Arguments   *bool `json:"arguments,omitempty"`
	Environment *bool `json:"environment,omitempty"`
	Materials   *bool `json:"materials,omitempty"`
}
