package shared

type CompensationInfo struct {
	AnnualizedBaseCompensationRange  *CompensationRange  `json:"annualizedBaseCompensationRange,omitempty"`
	AnnualizedTotalCompensationRange *CompensationRange  `json:"annualizedTotalCompensationRange,omitempty"`
	Entries                          []CompensationEntry `json:"entries,omitempty"`
}
