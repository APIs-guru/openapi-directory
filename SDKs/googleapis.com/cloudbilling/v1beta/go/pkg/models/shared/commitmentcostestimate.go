package shared

type CommitmentCostEstimate struct {
	CommitmentTotalCostEstimate *CostEstimate     `json:"commitmentTotalCostEstimate"`
	Name                        *string           `json:"name"`
	SkuCostEstimates            []SkuCostEstimate `json:"skuCostEstimates"`
}
