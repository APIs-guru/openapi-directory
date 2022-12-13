package shared

type SplitCommissionDetails struct {
	CommissionArrangement  *string `json:"commission_arrangement,omitempty"`
	LineOfCoverage         *string `json:"line_of_coverage,omitempty"`
	PercentageOfCommission string  `json:"percentage_of_commission"`
}
