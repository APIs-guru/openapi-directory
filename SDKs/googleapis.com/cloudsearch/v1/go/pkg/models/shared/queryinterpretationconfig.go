package shared

type QueryInterpretationConfig struct {
	ForceDisableSupplementalResults *bool `json:"forceDisableSupplementalResults"`
	ForceVerbatimMode               *bool `json:"forceVerbatimMode"`
}
