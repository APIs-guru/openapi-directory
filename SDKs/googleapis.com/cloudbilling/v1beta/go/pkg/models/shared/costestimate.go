package shared

type CostEstimate struct {
	CreditEstimates       []CreditEstimate `json:"creditEstimates"`
	NetCostEstimate       *Money           `json:"netCostEstimate"`
	PreCreditCostEstimate *Money           `json:"preCreditCostEstimate"`
}
