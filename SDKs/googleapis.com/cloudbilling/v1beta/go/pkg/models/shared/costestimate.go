package shared

type CostEstimate struct {
	CreditEstimates       []CreditEstimate `json:"creditEstimates,omitempty"`
	NetCostEstimate       *Money           `json:"netCostEstimate,omitempty"`
	PreCreditCostEstimate *Money           `json:"preCreditCostEstimate,omitempty"`
}
