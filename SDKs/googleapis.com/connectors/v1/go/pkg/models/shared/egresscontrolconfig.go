package shared

type EgressControlConfig struct {
	Backends        *string          `json:"backends"`
	ExtractionRules *ExtractionRules `json:"extractionRules"`
}
