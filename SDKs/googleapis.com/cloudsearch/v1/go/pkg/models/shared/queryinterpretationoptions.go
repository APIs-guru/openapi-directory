package shared

// QueryInterpretationOptions
// Options to interpret user query.
type QueryInterpretationOptions struct {
	DisableNlInterpretation    *bool `json:"disableNlInterpretation,omitempty"`
	DisableSupplementalResults *bool `json:"disableSupplementalResults,omitempty"`
	EnableVerbatimMode         *bool `json:"enableVerbatimMode,omitempty"`
}
