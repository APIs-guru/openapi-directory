package shared

type QueryInterpretationOptions struct {
	DisableNlInterpretation    *bool `json:"disableNlInterpretation"`
	DisableSupplementalResults *bool `json:"disableSupplementalResults"`
	EnableVerbatimMode         *bool `json:"enableVerbatimMode"`
}
