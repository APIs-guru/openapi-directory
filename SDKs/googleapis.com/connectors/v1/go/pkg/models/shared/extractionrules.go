package shared

// ExtractionRules
// Extraction Rules to identity the backends from customer provided configuration in Connection resource.
type ExtractionRules struct {
	ExtractionRule []ExtractionRule `json:"extractionRule,omitempty"`
}
