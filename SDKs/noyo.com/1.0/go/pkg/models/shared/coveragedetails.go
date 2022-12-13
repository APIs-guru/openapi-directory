package shared

type CoverageDetails struct {
	DependentCoverage       *bool `json:"dependent_coverage,omitempty"`
	ElectedOfficialCoverage *bool `json:"elected_official_coverage,omitempty"`
	RetireeCoverage         *bool `json:"retiree_coverage,omitempty"`
}
