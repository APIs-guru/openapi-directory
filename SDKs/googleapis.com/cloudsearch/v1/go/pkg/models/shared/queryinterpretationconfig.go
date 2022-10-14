package shared

type QueryInterpretationConfig struct {
	ForceDisableSupplementalResults *bool `json:"forceDisableSupplementalResults,omitempty"`
	ForceVerbatimMode               *bool `json:"forceVerbatimMode,omitempty"`
}
