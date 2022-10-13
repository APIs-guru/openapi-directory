package shared

type CompensationInfo struct {
	AnnualizedBaseCompensationRange  *CompensationRange  `json:"annualizedBaseCompensationRange"`
	AnnualizedTotalCompensationRange *CompensationRange  `json:"annualizedTotalCompensationRange"`
	Entries                          []CompensationEntry `json:"entries"`
}
