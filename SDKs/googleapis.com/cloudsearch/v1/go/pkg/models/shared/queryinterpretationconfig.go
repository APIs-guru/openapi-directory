package shared

// QueryInterpretationConfig
// Default options to interpret user query.
type QueryInterpretationConfig struct {
	ForceDisableSupplementalResults *bool `json:"forceDisableSupplementalResults,omitempty"`
	ForceVerbatimMode               *bool `json:"forceVerbatimMode,omitempty"`
}
