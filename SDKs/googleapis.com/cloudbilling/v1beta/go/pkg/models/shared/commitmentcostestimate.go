package shared

type CommitmentCostEstimate struct {
	CommitmentTotalCostEstimate *CostEstimate     `json:"commitmentTotalCostEstimate,omitempty"`
	Name                        *string           `json:"name,omitempty"`
	SkuCostEstimates            []SkuCostEstimate `json:"skuCostEstimates,omitempty"`
}
