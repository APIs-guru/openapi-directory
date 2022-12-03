package shared

// ApplicationWriteV1
// An application is a set of information submitted by a producer to institutions in order to get quotes.
type ApplicationWriteV1 struct {
	CoverageValues []CoverageValueWriteV1 `json:"coverage_values,omitempty"`
	Products       []string               `json:"products"`
	RiskValues     []RiskValueWriteV1     `json:"risk_values,omitempty"`
}
